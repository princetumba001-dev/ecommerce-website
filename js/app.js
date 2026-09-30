/**
 * NovaCart Master Controller & App Initialization
 * Coordinates Router, Toast system, Event Handlers, Cart Drawer, Search,
 * Modals, and Countdown Timers.
 */

// --- TOAST NOTIFICATIONS MANAGER ---
class ToastManager {
  constructor() {
    this.container = document.getElementById("toast-container");
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.id = "toast-container";
      document.body.appendChild(this.container);
    }
  }

  add({ id, title, message, type = "info" }) {
    const toastEl = document.createElement("div");
    toastEl.id = id;
    
    let bgBorder = "bg-white border-slate-200 text-slate-800";
    let iconSvg = `<svg class="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`;

    if (type === "success") {
      bgBorder = "bg-white border-emerald-300 text-slate-900";
      iconSvg = `<svg class="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>`;
    } else if (type === "warning") {
      bgBorder = "bg-white border-amber-300 text-slate-900";
      iconSvg = `<svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`;
    } else if (type === "error") {
      bgBorder = "bg-white border-rose-300 text-slate-900";
      iconSvg = `<svg class="w-5 h-5 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`;
    }

    toastEl.className = `toast-item p-4 rounded-2xl border shadow-xl flex items-start gap-3 animate-fade-in ${bgBorder}`;
    toastEl.innerHTML = `
      <div class="shrink-0 mt-0.5">${iconSvg}</div>
      <div class="flex-1 min-w-0">
        <h5 class="font-heading font-bold text-xs sm:text-sm text-slate-900">${title}</h5>
        <p class="text-xs text-slate-500 mt-0.5 leading-relaxed">${message}</p>
      </div>
      <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600 shrink-0">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    `;

    this.container.appendChild(toastEl);

    // Auto dismiss after 3.8 seconds
    setTimeout(() => {
      toastEl.classList.add("opacity-0", "translate-x-4");
      setTimeout(() => {
        if (toastEl.parentElement) toastEl.remove();
      }, 300);
    }, 3800);
  }
}

window.NovaToast = new ToastManager();

// --- CLIENT-SIDE ROUTER ---
class NovaRouter {
  constructor() {
    this.routes = {
      "home": renderHomePage,
      "shop": renderShopPage,
      "product-details": renderProductDetailsPage,
      "cart": renderCartPage,
      "checkout": renderCheckoutPage,
      "order-success": renderOrderSuccessPage,
      "wishlist": renderWishlistPage,
      "deals": renderDealsPage,
      "about": renderAboutPage,
      "contact": renderContactPage
    };
    this.currentRoute = "home";
    this.params = {};

    window.addEventListener("hashchange", () => this.handleHashChange());
    window.addEventListener("load", () => this.handleHashChange());
  }

  navigate(route, params = {}) {
    const queryString = Object.keys(params).length
      ? "?" + new URLSearchParams(params).toString()
      : "";
    window.location.hash = `#${route}${queryString}`;
  }

  handleHashChange() {
    const hash = window.location.hash.slice(1) || "home";
    const [path, queryString] = hash.split("?");

    this.currentRoute = path || "home";
    this.params = {};

    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      for (const [key, val] of searchParams.entries()) {
        this.params[key] = val;
      }
    }

    this.render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const app = document.getElementById("app");
    if (!app) return;

    // Reset details helper states on navigation
    if (this.currentRoute === "product-details") {
      window.selectedDetailImgIndex = 0;
      window.selectedQuantity = 1;
    }

    const routeRenderer = this.routes[this.currentRoute] || this.routes["home"];
    const pageHtml = routeRenderer(this.params.id);

    app.innerHTML = `
      ${renderHeader()}
      <div id="main-content">
        ${pageHtml}
      </div>
      ${renderFooter()}
      ${renderCartDrawer()}
      ${renderQuickViewModal()}
      ${renderAuthModal()}
      ${renderMobileMenu()}
    `;

    // Reinitialize interactive features for the active page
    this.postRender();
  }

  postRender() {
    // If on homepage or deals page, kickstart countdown timer
    if (this.currentRoute === "home" || this.currentRoute === "deals") {
      initCountdownTimer();
    }
  }
}

window.router = new NovaRouter();

// Listen to store updates to keep badges and reactive elements updated
window.novaStore.subscribe(() => {
  // If drawer is open, keep drawer markup updated without wiping inputs
  const drawerEl = document.getElementById("cart-drawer");
  if (drawerEl) {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = renderCartDrawer();
    const newDrawer = tempContainer.firstElementChild;
    drawerEl.replaceWith(newDrawer);
  }

  // Update header badges without losing page input focus
  const headerEl = document.querySelector("header");
  if (headerEl) {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = renderHeader();
    const newHeader = tempContainer.querySelector("header");
    headerEl.replaceWith(newHeader);
  }

  // If on shop page, re-render product grid
  if (window.router.currentRoute === "shop") {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.innerHTML = renderShopPage();
    }
  }

  // If on cart page, re-render cart page
  if (window.router.currentRoute === "cart") {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.innerHTML = renderCartPage();
    }
  }

  // If on wishlist page, re-render wishlist page
  if (window.router.currentRoute === "wishlist") {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.innerHTML = renderWishlistPage();
    }
  }
});

// --- DRAWER & MODAL CONTROLLERS ---
window.openCartDrawer = function() {
  window.novaStore.cartDrawerOpen = true;
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    drawer.classList.remove("opacity-0", "pointer-events-none");
    drawer.classList.add("opacity-100", "pointer-events-auto");
    const panel = drawer.querySelector(".transform");
    if (panel) panel.classList.remove("translate-x-full");
  }
};

window.closeCartDrawer = function() {
  window.novaStore.cartDrawerOpen = false;
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    const panel = drawer.querySelector(".transform");
    if (panel) panel.classList.add("translate-x-full");
    setTimeout(() => {
      drawer.classList.add("opacity-0", "pointer-events-none");
      drawer.classList.remove("opacity-100", "pointer-events-auto");
    }, 200);
  }
};

window.toggleMobileMenu = function(force) {
  const nextState = force !== undefined ? force : !window.novaStore.mobileMenuOpen;
  window.novaStore.mobileMenuOpen = nextState;
  const drawer = document.getElementById("mobile-menu-drawer");
  if (drawer) {
    if (nextState) {
      drawer.classList.remove("opacity-0", "pointer-events-none");
      drawer.classList.add("opacity-100", "pointer-events-auto");
      const panel = drawer.querySelector(".transform");
      if (panel) panel.classList.remove("-translate-x-full");
    } else {
      const panel = drawer.querySelector(".transform");
      if (panel) panel.classList.add("-translate-x-full");
      setTimeout(() => {
        drawer.classList.add("opacity-0", "pointer-events-none");
        drawer.classList.remove("opacity-100", "pointer-events-auto");
      }, 200);
    }
  }
};

window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  window.novaStore.quickViewProduct = product;
  const modalContainer = document.getElementById("quick-view-container");
  if (!modalContainer) {
    const c = document.createElement("div");
    c.id = "quick-view-container";
    document.body.appendChild(c);
  }
  document.getElementById("quick-view-container").innerHTML = renderQuickViewModal();
};

window.closeQuickView = function() {
  window.novaStore.quickViewProduct = null;
  const c = document.getElementById("quick-view-container");
  if (c) c.innerHTML = "";
};

window.openAuthModal = function(mode = "login") {
  window.authModalOpen = true;
  window.authModalMode = mode;
  let c = document.getElementById("auth-modal-container");
  if (!c) {
    c = document.createElement("div");
    c.id = "auth-modal-container";
    document.body.appendChild(c);
  }
  c.innerHTML = renderAuthModal();
};

window.closeAuthModal = function() {
  window.authModalOpen = false;
  const c = document.getElementById("auth-modal-container");
  if (c) c.innerHTML = "";
};

window.handleAuthSubmit = function(e, mode) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const name = formData.get("name") || email.split("@")[0];

  if (mode === "signup") {
    const pwd = formData.get("password");
    const confirm = formData.get("confirmPassword");
    if (pwd !== confirm) {
      window.novaStore.showToast("Password Error", "Passwords do not match.", "error");
      return;
    }
    window.novaStore.signup(name, email);
  } else {
    window.novaStore.login(email, name);
  }
  window.closeAuthModal();
};

// --- DYNAMIC SEARCH AUTOCOMPLETE ---
window.handleSearchInput = function(query) {
  const dropdown = document.getElementById("search-suggestions-dropdown");
  const clearBtn = document.getElementById("search-clear-btn");
  if (!dropdown) return;

  const val = (query || "").trim().toLowerCase();

  if (clearBtn) {
    if (val.length > 0) clearBtn.classList.remove("hidden");
    else clearBtn.classList.add("hidden");
  }

  if (val.length === 0) {
    dropdown.classList.add("hidden");
    dropdown.innerHTML = "";
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(val) || 
    p.category.toLowerCase().includes(val) ||
    p.description.toLowerCase().includes(val)
  ).slice(0, 5);

  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="p-3 text-center text-xs text-slate-500">
        No products found matching "${query}"
      </div>
    `;
  } else {
    dropdown.innerHTML = `
      <div class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Products (${matches.length})</div>
      <div class="space-y-1">
        ${matches.map(p => `
          <div 
            onclick="window.router.navigate('product-details', { id: '${p.id}' }); window.clearSearchInput();"
            class="flex items-center gap-3 p-2 rounded-xl hover:bg-indigo-50/70 cursor-pointer transition-colors"
          >
            <img src="${p.images[0]}" class="w-9 h-9 rounded-lg object-cover bg-slate-100">
            <div class="flex-1 min-w-0">
              <div class="font-bold text-xs text-slate-900 truncate">${p.name}</div>
              <div class="text-[10px] text-slate-400 capitalize">${p.category}</div>
            </div>
            <span class="font-extrabold text-xs text-slate-900">$${p.price.toFixed(2)}</span>
          </div>
        `).join("")}
      </div>
      <div class="mt-2 pt-2 border-t border-slate-100">
        <button 
          onclick="window.submitHeaderSearch('${query}')"
          class="w-full text-center text-xs font-bold text-indigo-600 hover:underline p-1"
        >
          View all results for "${query}" →
        </button>
      </div>
    `;
  }

  dropdown.classList.remove("hidden");
};

window.clearSearchInput = function() {
  const input = document.getElementById("header-search-input");
  const dropdown = document.getElementById("search-suggestions-dropdown");
  const clearBtn = document.getElementById("search-clear-btn");
  if (input) input.value = "";
  if (dropdown) {
    dropdown.innerHTML = "";
    dropdown.classList.add("hidden");
  }
  if (clearBtn) clearBtn.classList.add("hidden");
};

window.submitHeaderSearch = function(query) {
  window.novaStore.setFilter("search", query);
  window.clearSearchInput();
  window.router.navigate("shop");
};

// Close search dropdown on click outside
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("search-suggestions-dropdown");
  const input = document.getElementById("header-search-input");
  if (dropdown && !dropdown.contains(e.target) && e.target !== input) {
    dropdown.classList.add("hidden");
  }
});

// --- COUNTDOWN TIMER ---
function initCountdownTimer() {
  function tick() {
    const hoursEl = document.getElementById("countdown-hours");
    const minsEl = document.getElementById("countdown-minutes");
    const secsEl = document.getElementById("countdown-seconds");
    if (!hoursEl || !minsEl || !secsEl) return;

    const now = new Date();
    // Countdown to midnight or next 8-hour window
    const target = new Date();
    target.setHours(23, 59, 59, 999);

    const diff = target - now;
    if (diff <= 0) return;

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  }

  tick();
  if (window.timerInterval) clearInterval(window.timerInterval);
  window.timerInterval = setInterval(tick, 1000);
}

// --- PRODUCT DETAILS HELPERS ---
window.setDetailImage = function(index) {
  window.selectedDetailImgIndex = index;
  const mainImg = document.getElementById("detail-main-img");
  const product = PRODUCTS.find(p => p.id === window.router.params.id) || PRODUCTS[0];
  if (mainImg && product.images[index]) {
    mainImg.src = product.images[index];
  }
  // Update border styling on thumbnails
  const thumbnails = document.querySelectorAll(".lg\\:col-span-6 .overflow-x-auto button");
  thumbnails.forEach((btn, idx) => {
    if (idx === index) {
      btn.className = "w-20 h-20 rounded-2xl overflow-hidden border-2 bg-slate-100 shrink-0 transition-all border-indigo-600 shadow-md scale-95";
    } else {
      btn.className = "w-20 h-20 rounded-2xl overflow-hidden border-2 bg-slate-100 shrink-0 transition-all border-slate-200 hover:border-slate-400";
    }
  });
};

window.setSelectedColor = function(colorName) {
  window.selectedColor = colorName;
  const label = document.getElementById("selected-color-label");
  if (label) label.textContent = colorName;

  const colorButtons = document.querySelectorAll(".lg\\:col-span-6 .flex.items-center.gap-2\\.5 button");
  colorButtons.forEach(btn => {
    if (btn.title === colorName) {
      btn.className = "w-9 h-9 rounded-full border-2 transition-all p-0.5 border-indigo-600 ring-2 ring-indigo-200 scale-110";
    } else {
      btn.className = "w-9 h-9 rounded-full border-2 transition-all p-0.5 border-slate-300 hover:border-slate-400";
    }
  });
};

window.changeDetailQty = function(delta) {
  const input = document.getElementById("detail-qty-input");
  let current = parseInt(input ? input.value : 1) || 1;
  current = Math.max(1, current + delta);
  window.selectedQuantity = current;
  if (input) input.value = current;
};

window.handleBuyNow = function(productId, qty, color) {
  window.novaStore.addToCart(productId, qty, color);
  window.router.navigate("checkout");
};

window.setDetailTab = function(tabName) {
  const tabs = ["desc", "specs", "reviews"];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const content = document.getElementById(`tab-content-${t}`);
    if (btn && content) {
      if (t === tabName) {
        btn.className = "detail-tab pb-3 text-indigo-600 border-b-2 border-indigo-600";
        content.classList.remove("hidden");
      } else {
        btn.className = "detail-tab pb-3 text-slate-500 hover:text-slate-900 border-b-2 border-transparent";
        content.classList.add("hidden");
      }
    }
  });
};

window.toggleReviewForm = function() {
  const form = document.getElementById("write-review-form");
  if (form) form.classList.toggle("hidden");
};

window.handleReviewSubmit = function(e, productId) {
  e.preventDefault();
  const form = e.target;
  const name = form.reviewerName.value;
  const rating = parseInt(form.reviewerRating.value);
  const title = form.reviewTitle.value;
  const text = form.reviewText.value;

  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    if (!product.customerReviews) product.customerReviews = [];
    product.customerReviews.unshift({
      author: name,
      rating,
      date: "Just now",
      title,
      text,
      verified: true
    });
    product.reviewsCount = (product.reviewsCount || 0) + 1;
  }

  window.novaStore.showToast("Review Submitted ⭐", "Thank you for your valuable feedback!", "success");
  window.setDetailTab("reviews");
};

// --- FEATURED TAB FILTER (HOMEPAGE) ---
window.filterFeaturedTab = function(category) {
  const buttons = document.querySelectorAll(".featured-tab");
  buttons.forEach(b => {
    b.className = "featured-tab px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors";
  });
  if (event && event.target) {
    event.target.className = "featured-tab active px-3.5 py-1.5 rounded-full bg-indigo-600 text-white transition-colors";
  }

  const container = document.getElementById("featured-products-container");
  if (!container) return;

  const filtered = category === "all"
    ? PRODUCTS.filter(p => p.isFeatured).slice(0, 8)
    : PRODUCTS.filter(p => p.category === category).slice(0, 8);

  container.innerHTML = filtered.map(renderProductCard).join("");
};

// --- CART & COUPON HANDLERS ---
window.handleCartCouponSubmit = function(e) {
  e.preventDefault();
  const code = e.target.couponCode.value;
  window.novaStore.applyCoupon(code);
};

// --- CHECKOUT & ORDER COMPLETION ---
window.autofillCheckoutForm = function() {
  const fields = {
    "chk-name": "Alex Morgan",
    "chk-phone": "+1 (555) 019-2834",
    "chk-email": "alex.morgan@example.com",
    "chk-street": "742 Evergreen Terrace, Apt 4B",
    "chk-city": "San Francisco",
    "chk-state": "California",
    "chk-zip": "94107"
  };

  for (const [id, val] of Object.entries(fields)) {
    const el = document.getElementById(id);
    if (el) el.value = val;
  }

  window.novaStore.showToast("Address Filled ⚡", "Demo shipping address loaded successfully.", "info");
};

window.selectPaymentTab = function(method) {
  const tabs = ["card", "upi", "netbanking", "cod"];
  tabs.forEach(m => {
    const btn = document.getElementById(`pay-btn-${m}`);
    const fields = document.getElementById(`payment-fields-${m}`);
    if (btn && fields) {
      if (m === method) {
        btn.className = "payment-tab p-3 rounded-2xl border-2 border-indigo-600 bg-indigo-50/50 text-indigo-700 font-bold text-xs flex flex-col items-center gap-1.5";
        fields.classList.remove("hidden");
      } else {
        btn.className = "payment-tab p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex flex-col items-center gap-1.5";
        fields.classList.add("hidden");
      }
    }
  });
  window.activePaymentMethod = method;
};

window.handleOrderPlacement = function(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById("place-order-btn");

  // Show loading state on place order button
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      Processing Secure Payment...
    `;
  }

  const shippingData = {
    customerName: form.customerName.value,
    customerPhone: form.customerPhone.value,
    customerEmail: form.customerEmail.value,
    streetAddress: form.streetAddress.value,
    city: form.city.value,
    state: form.state.value,
    zipCode: form.zipCode.value
  };

  const paymentMethodName = window.activePaymentMethod === "upi" ? "UPI (alex.morgan@upi)"
    : window.activePaymentMethod === "cod" ? "Cash on Delivery"
    : window.activePaymentMethod === "netbanking" ? "Net Banking (Chase)"
    : "Credit Card (Ending in 4242)";

  setTimeout(() => {
    const createdOrder = window.novaStore.createOrder(shippingData, { method: paymentMethodName });
    
    // Trigger celebratory confetti effect
    triggerConfetti();

    // Navigate to Order Success View
    window.router.navigate("order-success", { id: createdOrder.id });
    window.novaStore.showToast("Order Placed Successfully! 🎉", `Order ${createdOrder.id} has been confirmed.`, "success");
  }, 1200);
};

// Simple lightweight confetti trigger
function triggerConfetti() {
  if (window.confetti) {
    window.confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

window.printInvoice = function() {
  window.print();
};

window.handleNewsletterSubmit = function(e) {
  e.preventDefault();
  const email = e.target.newsletterEmail.value;
  e.target.reset();
  window.novaStore.showToast("Welcome to NovaCart Club! 🎁", `Check your inbox (${email})! Use code NOVA20 for 20% off.`, "success");
};

window.handleContactSubmit = function(e) {
  e.preventDefault();
  e.target.reset();
  window.novaStore.showToast("Message Received ✉️", "Our concierge team will respond within 4 hours.", "success");
};
