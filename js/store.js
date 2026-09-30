/**
 * NovaCart State Store
 * Reactive state management with localStorage persistence and pub/sub subscribers.
 */

class NovaStore {
  constructor() {
    this.subscribers = [];
    this.toastSubscribers = [];

    // Load persisted state or defaults
    this.cart = this.loadFromStorage("novacart_cart", [
      // Pre-seed 1 item so the user can immediately experience cart interaction!
      {
        id: "elec-1",
        quantity: 1,
        color: "Space Black",
        addedAt: Date.now()
      }
    ]);

    this.wishlist = this.loadFromStorage("novacart_wishlist", ["wat-1", "beau-1"]);

    this.user = this.loadFromStorage("novacart_user", {
      isLoggedIn: true,
      name: "Alex Morgan",
      email: "alex.morgan@example.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      orders: [
        {
          id: "NC-829140",
          date: "Sep 24, 2026",
          status: "Delivered",
          total: 199.99,
          itemsCount: 1
        }
      ]
    });

    this.appliedCoupon = this.loadFromStorage("novacart_coupon", null);

    this.filters = {
      search: "",
      category: "all",
      minPrice: 0,
      maxPrice: 800,
      minRating: 0,
      sort: "featured",
      inStockOnly: false
    };

    this.quickViewProduct = null;
    this.cartDrawerOpen = false;
    this.mobileMenuOpen = false;
  }

  loadFromStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn("Storage load error:", e);
      return fallback;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(cb => {
      try {
        cb(this);
      } catch (err) {
        console.error("Subscriber error:", err);
      }
    });
  }

  // --- CART OPERATIONS ---
  addToCart(productId, quantity = 1, color = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return false;

    const existingIndex = this.cart.findIndex(
      item => item.id === productId && (!color || item.color === color)
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: productId,
        quantity: Math.max(1, quantity),
        color: color || (product.colors && product.colors[0] ? product.colors[0].name : "Default"),
        addedAt: Date.now()
      });
    }

    this.saveToStorage("novacart_cart", this.cart);
    this.notify();
    this.showToast("Added to Cart!", `${product.name} is now in your cart.`, "success");
    return true;
  }

  removeFromCart(productId, color = null) {
    const item = this.cart.find(i => i.id === productId && (!color || i.color === color));
    const product = item ? PRODUCTS.find(p => p.id === item.id) : null;

    this.cart = this.cart.filter(i => !(i.id === productId && (!color || i.color === color)));
    this.saveToStorage("novacart_cart", this.cart);
    this.notify();

    if (product) {
      this.showToast("Removed from Cart", `${product.name} was removed.`, "info");
    }
  }

  updateQuantity(productId, delta, color = null) {
    const item = this.cart.find(i => i.id === productId && (!color || i.color === color));
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(productId, color);
    } else {
      this.saveToStorage("novacart_cart", this.cart);
      this.notify();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveToStorage("novacart_cart", this.cart);
    this.notify();
  }

  getCartItems() {
    return this.cart
      .map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (!product) return null;
        return {
          ...item,
          product,
          totalPrice: (product.price * item.quantity).toFixed(2)
        };
      })
      .filter(Boolean);
  }

  getCartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getCartTotals() {
    const items = this.getCartItems();
    const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    let discountAmount = 0;
    if (this.appliedCoupon) {
      if (this.appliedCoupon.discountPercent) {
        discountAmount = (subtotal * this.appliedCoupon.discountPercent) / 100;
      }
    }

    const freeShipping = subtotal >= 50 || (this.appliedCoupon && this.appliedCoupon.freeShipping);
    const shipping = subtotal > 0 ? (freeShipping ? 0 : 9.99) : 0;
    const tax = (subtotal - discountAmount) * 0.08; // 8% estimated tax
    const grandTotal = Math.max(0, subtotal - discountAmount + shipping + (tax > 0 ? tax : 0));

    return {
      subtotal: subtotal.toFixed(2),
      discount: discountAmount.toFixed(2),
      shipping: shipping.toFixed(2),
      freeShipping,
      tax: tax.toFixed(2),
      grandTotal: grandTotal.toFixed(2),
      appliedCoupon: this.appliedCoupon
    };
  }

  applyCoupon(code) {
    const cleanCode = (code || "").trim().toUpperCase();
    if (!cleanCode) {
      this.showToast("Coupon Error", "Please enter a promo code.", "warning");
      return false;
    }
    const coupon = COUPONS[cleanCode];
    if (coupon) {
      this.appliedCoupon = coupon;
      this.saveToStorage("novacart_coupon", this.appliedCoupon);
      this.notify();
      this.showToast("Coupon Applied! 🎉", `${coupon.description} applied successfully!`, "success");
      return true;
    } else {
      this.showToast("Invalid Coupon", `Code "${code}" is not recognized or expired.`, "error");
      return false;
    }
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.saveToStorage("novacart_coupon", null);
    this.notify();
    this.showToast("Coupon Removed", "Discount has been removed.", "info");
  }

  // --- WISHLIST OPERATIONS ---
  toggleWishlist(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const exists = this.wishlist.includes(productId);

    if (exists) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
      this.showToast("Removed from Wishlist", `${product ? product.name : "Product"} was removed.`, "info");
    } else {
      this.wishlist.push(productId);
      this.showToast("Added to Wishlist ❤️", `${product ? product.name : "Product"} saved to favorites!`, "success");
    }

    this.saveToStorage("novacart_wishlist", this.wishlist);
    this.notify();
    return !exists;
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  getWishlistItems() {
    return this.wishlist
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean);
  }

  moveToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    this.addToCart(productId, 1);
    this.wishlist = this.wishlist.filter(id => id !== productId);
    this.saveToStorage("novacart_wishlist", this.wishlist);
    this.notify();
  }

  // --- AUTH OPERATIONS ---
  login(email, name = "Alex Morgan") {
    this.user = {
      isLoggedIn: true,
      name: name || "Alex Morgan",
      email: email || "alex.morgan@example.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      orders: this.user && this.user.orders ? this.user.orders : []
    };
    this.saveToStorage("novacart_user", this.user);
    this.notify();
    this.showToast("Welcome back!", `Signed in as ${this.user.name}.`, "success");
  }

  signup(name, email) {
    this.user = {
      isLoggedIn: true,
      name: name || "Customer",
      email: email,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      orders: []
    };
    this.saveToStorage("novacart_user", this.user);
    this.notify();
    this.showToast("Account Created! 🎉", `Welcome to NovaCart, ${this.user.name}!`, "success");
  }

  logout() {
    this.user = {
      isLoggedIn: false,
      name: "",
      email: "",
      avatar: "",
      orders: []
    };
    this.saveToStorage("novacart_user", this.user);
    this.notify();
    this.showToast("Signed Out", "You have been logged out safely.", "info");
  }

  // --- ORDER CREATION ---
  createOrder(shippingData, paymentData) {
    const totals = this.getCartTotals();
    const items = this.getCartItems();

    const orderId = `NC-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      timestamp: Date.now(),
      status: "Confirmed",
      shippingData,
      paymentData,
      items,
      totals,
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
      })
    };

    // Save in user orders history
    if (this.user) {
      if (!this.user.orders) this.user.orders = [];
      this.user.orders.unshift({
        id: orderId,
        date: newOrder.date,
        status: "Processing",
        total: parseFloat(totals.grandTotal),
        itemsCount: items.length
      });
      this.saveToStorage("novacart_user", this.user);
    }

    // Save specific order details for the receipt / success page
    this.saveToStorage(`novacart_order_${orderId}`, newOrder);
    this.saveToStorage("novacart_latest_order", newOrder);

    // Clear cart and coupon
    this.cart = [];
    this.appliedCoupon = null;
    this.saveToStorage("novacart_cart", this.cart);
    this.saveToStorage("novacart_coupon", null);

    this.notify();
    return newOrder;
  }

  // --- FILTER & SEARCH HELPERS ---
  setFilter(key, value) {
    this.filters[key] = value;
    this.notify();
  }

  resetFilters() {
    this.filters = {
      search: "",
      category: "all",
      minPrice: 0,
      maxPrice: 800,
      minRating: 0,
      sort: "featured",
      inStockOnly: false
    };
    this.notify();
  }

  getFilteredProducts() {
    return PRODUCTS.filter(product => {
      // Category filter
      if (this.filters.category !== "all" && product.category !== this.filters.category) {
        return false;
      }

      // Search keyword filter
      if (this.filters.search.trim()) {
        const query = this.filters.search.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      // Price filter
      if (product.price < this.filters.minPrice || product.price > this.filters.maxPrice) {
        return false;
      }

      // Rating filter
      if (this.filters.minRating > 0 && product.rating < this.filters.minRating) {
        return false;
      }

      // In stock filter
      if (this.filters.inStockOnly && product.stock <= 0) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (this.filters.sort) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "discount":
          return b.discount - a.discount;
        case "newest":
          return b.badge === "NEW" ? 1 : -1;
        case "featured":
        default:
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
    });
  }

  // --- TOAST NOTIFICATIONS ---
  showToast(title, message, type = "info") {
    const toast = {
      id: `toast-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      title,
      message,
      type
    };

    if (window.NovaToast) {
      window.NovaToast.add(toast);
    }
  }
}

// Global store instance
window.novaStore = new NovaStore();
