/**
 * NovaCart UI Components
 * Reusable layout components, cards, navigation, modals, and drawers.
 */

// Helper to safely render star ratings
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;
  let starsHtml = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHtml += `<svg class="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    } else if (i === fullStars + 1 && hasHalfStar) {
      starsHtml += `<svg class="w-4 h-4 text-amber-400 fill-amber-400/50" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    } else {
      starsHtml += `<svg class="w-4 h-4 text-slate-300 fill-slate-200" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }
  }
  return starsHtml;
}

// Fallback image handler
const FALLBACK_IMG = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80";

// --- PRODUCT CARD COMPONENT ---
function renderProductCard(product) {
  const isWishlisted = window.novaStore ? window.novaStore.isInWishlist(product.id) : false;
  const primaryImg = (product.images && product.images[0]) || FALLBACK_IMG;

  let badgeColor = "bg-indigo-600 text-white";
  if (product.badge === "SALE") badgeColor = "bg-rose-500 text-white";
  if (product.badge === "BEST SELLER") badgeColor = "bg-amber-500 text-slate-950";
  if (product.badge === "NEW") badgeColor = "bg-emerald-600 text-white";
  if (product.badge === "HOT") badgeColor = "bg-orange-500 text-white";
  if (product.badge === "PREMIUM") badgeColor = "bg-slate-900 text-white";

  return `
    <div class="product-card group relative bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between transition-all duration-300">
      
      <!-- Top Image & Floating Badges -->
      <div class="img-zoom-wrapper relative aspect-[4/3] bg-slate-100/70 overflow-hidden cursor-pointer" onclick="window.router.navigate('product-details', { id: '${product.id}' })">
        <img 
          src="${primaryImg}" 
          alt="${product.name}" 
          loading="lazy"
          onerror="this.src='${FALLBACK_IMG}'"
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Badges Stack -->
        <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          ${product.badge ? `<span class="badge-pill ${badgeColor} shadow-sm font-semibold">${product.badge}</span>` : ""}
          ${product.discount ? `<span class="badge-pill bg-rose-50 text-rose-600 border border-rose-200 shadow-xs font-bold">-${product.discount}%</span>` : ""}
        </div>

        <!-- Wishlist Button -->
        <button 
          type="button" 
          aria-label="Save to Wishlist"
          onclick="event.stopPropagation(); window.novaStore.toggleWishlist('${product.id}')"
          class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-rose-500 hover:bg-white transition-all transform active:scale-90 z-20"
        >
          <svg class="w-5 h-5 transition-colors ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-slate-500'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>

        <!-- Quick View Overlay Button on Desktop -->
        <div class="product-actions absolute bottom-3 inset-x-3 hidden sm:flex items-center justify-center gap-2 z-20">
          <button 
            type="button"
            onclick="event.stopPropagation(); window.openQuickView('${product.id}')"
            class="w-full py-2.5 px-4 bg-slate-900/90 backdrop-blur-md hover:bg-slate-900 text-white rounded-xl text-xs font-semibold shadow-lg flex items-center justify-center gap-1.5 transition-all"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            Quick View
          </button>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- Category & Rating -->
          <div class="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span class="uppercase tracking-wider font-semibold text-indigo-600 text-[11px]">${product.category}</span>
            <div class="flex items-center gap-1">
              <div class="flex">${renderStars(product.rating)}</div>
              <span class="font-medium text-slate-700 ml-0.5">(${product.reviewsCount})</span>
            </div>
          </div>

          <!-- Product Name -->
          <h3 
            onclick="window.router.navigate('product-details', { id: '${product.id}' })"
            class="font-heading font-semibold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 hover:text-indigo-600 cursor-pointer transition-colors"
          >
            ${product.name}
          </h3>
        </div>

        <!-- Pricing & Add to Cart -->
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div class="flex flex-col">
            <div class="flex items-baseline gap-1.5">
              <span class="text-base sm:text-lg font-extrabold text-slate-900">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<span class="text-xs text-slate-400 line-through">$${product.originalPrice.toFixed(2)}</span>` : ""}
            </div>
            ${product.stock <= 5 ? `<span class="text-[11px] font-medium text-amber-600">Only ${product.stock} left!</span>` : `<span class="text-[11px] font-medium text-emerald-600">In Stock</span>`}
          </div>

          <button 
            type="button"
            onclick="event.stopPropagation(); window.novaStore.addToCart('${product.id}', 1)"
            class="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm shadow-indigo-200 transition-all cursor-pointer"
            title="Add to Cart"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            <span class="hidden xs:inline">Add</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

// --- HEADER / NAVBAR COMPONENT ---
function renderHeader() {
  const store = window.novaStore;
  const cartCount = store.getCartCount();
  const wishlistCount = store.wishlist.length;
  const user = store.user;
  const currentRoute = window.router ? window.router.currentRoute : "home";

  return `
    <!-- Top Announcement Bar -->
    <div class="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white text-xs py-2 px-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2 font-medium truncate">
          <span class="bg-indigo-500/40 text-indigo-200 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-indigo-400/30">Limited</span>
          <span>✨ Spring Celebration: Up to 50% Off! Use code <strong class="text-amber-300 font-extrabold tracking-wide">NOVA20</strong> for extra 20% off.</span>
        </div>
        <div class="hidden md:flex items-center gap-6 text-[11px] text-indigo-200">
          <span class="flex items-center gap-1"><svg class="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Free Express Delivery on orders over $50</span>
          <a href="#contact" class="hover:text-white transition-colors">Help Center</a>
          <a href="#about" class="hover:text-white transition-colors">Track Order</a>
        </div>
      </div>
    </div>

    <!-- Main Sticky Navigation -->
    <header class="sticky top-0 z-50 glass-nav transition-all duration-200 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">

          <!-- Left: Mobile Menu Toggle & Brand Logo -->
          <div class="flex items-center gap-3">
            <button 
              type="button" 
              onclick="window.toggleMobileMenu()"
              class="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>

            <!-- Brand Logo -->
            <a href="#home" class="flex items-center gap-2.5 group">
              <div class="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-white shadow-md shadow-indigo-300/40 group-hover:scale-105 transition-transform">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <div class="flex flex-col">
                <span class="font-heading font-extrabold text-2xl tracking-tight text-slate-900 leading-none">
                  Nova<span class="text-indigo-600">Cart</span>
                </span>
                <span class="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Premium Store</span>
              </div>
            </a>
          </div>

          <!-- Center: Desktop Nav Links -->
          <nav class="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
            <a href="#home" class="px-3.5 py-2 rounded-xl transition-colors ${currentRoute === 'home' ? 'text-indigo-600 bg-indigo-50 font-bold' : 'hover:text-indigo-600 hover:bg-slate-50'}">Home</a>
            <a href="#shop" class="px-3.5 py-2 rounded-xl transition-colors ${currentRoute === 'shop' ? 'text-indigo-600 bg-indigo-50 font-bold' : 'hover:text-indigo-600 hover:bg-slate-50'}">Shop</a>
            <div class="relative group">
              <button class="px-3.5 py-2 rounded-xl flex items-center gap-1 hover:text-indigo-600 hover:bg-slate-50 transition-colors">
                Categories
                <svg class="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <!-- Categories Dropdown Menu -->
              <div class="absolute left-0 top-full pt-2 w-64 hidden group-hover:block z-50">
                <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-xs">
                  ${CATEGORIES.map(cat => `
                    <a 
                      href="#shop" 
                      onclick="window.novaStore.setFilter('category', '${cat.id}')"
                      class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50/70 text-slate-700 hover:text-indigo-600 transition-colors"
                    >
                      <div class="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                      </div>
                      <div>
                        <div class="font-semibold text-slate-900 text-xs">${cat.name}</div>
                        <div class="text-[10px] text-slate-400">${cat.itemCount} products</div>
                      </div>
                    </a>
                  `).join("")}
                </div>
              </div>
            </div>
            <a href="#deals" class="px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1 ${currentRoute === 'deals' ? 'text-rose-600 bg-rose-50 font-bold' : 'hover:text-rose-600 hover:bg-rose-50/50'}">
              <svg class="w-4 h-4 text-rose-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              Deals
            </a>
            <a href="#about" class="px-3.5 py-2 rounded-xl transition-colors ${currentRoute === 'about' ? 'text-indigo-600 bg-indigo-50 font-bold' : 'hover:text-indigo-600 hover:bg-slate-50'}">About</a>
            <a href="#contact" class="px-3.5 py-2 rounded-xl transition-colors ${currentRoute === 'contact' ? 'text-indigo-600 bg-indigo-50 font-bold' : 'hover:text-indigo-600 hover:bg-slate-50'}">Contact</a>
          </nav>

          <!-- Right: Search Bar & Actions -->
          <div class="flex items-center gap-2 sm:gap-3">
            
            <!-- Dynamic Search Bar (Desktop & Tablet) -->
            <div class="relative hidden sm:block w-48 md:w-64 lg:w-72">
              <div class="relative">
                <input 
                  type="text" 
                  id="header-search-input"
                  placeholder="Search 24+ products..." 
                  oninput="window.handleSearchInput(this.value)"
                  onkeydown="if(event.key==='Enter') window.submitHeaderSearch(this.value)"
                  class="w-full pl-9 pr-8 py-2 bg-slate-100/90 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-indigo-400 rounded-full text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none transition-all shadow-inner"
                />
                <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <button 
                  id="search-clear-btn" 
                  onclick="window.clearSearchInput()"
                  class="hidden absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              <!-- Search Suggestions Dropdown -->
              <div id="search-suggestions-dropdown" class="hidden absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 max-h-80 overflow-y-auto"></div>
            </div>

            <!-- Wishlist Icon -->
            <a 
              href="#wishlist" 
              class="relative p-2.5 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-all active:scale-95"
              aria-label="View Wishlist"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              ${wishlistCount > 0 ? `<span class="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">${wishlistCount}</span>` : ""}
            </a>

            <!-- Cart Trigger Icon -->
            <button 
              type="button" 
              onclick="window.openCartDrawer()"
              class="relative p-2.5 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 transition-all active:scale-95"
              aria-label="View Cart"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              ${cartCount > 0 ? `<span class="absolute top-1 right-1 w-4 h-4 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">${cartCount}</span>` : ""}
            </button>

            <!-- User Auth Dropdown / Button -->
            ${user && user.isLoggedIn ? `
              <div class="relative group">
                <button class="flex items-center gap-2 p-1 pl-2 rounded-full hover:bg-slate-100 transition-colors">
                  <img src="${user.avatar}" alt="${user.name}" class="w-8 h-8 rounded-full object-cover border border-indigo-200">
                  <span class="hidden md:inline font-semibold text-xs text-slate-800">${user.name.split(" ")[0]}</span>
                  <svg class="w-3.5 h-3.5 text-slate-400 hidden md:inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <!-- Profile dropdown -->
                <div class="absolute right-0 top-full pt-2 w-52 hidden group-hover:block z-50">
                  <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-xs">
                    <div class="p-2 border-b border-slate-100 mb-1">
                      <div class="font-bold text-slate-900">${user.name}</div>
                      <div class="text-[11px] text-slate-500 truncate">${user.email}</div>
                    </div>
                    <a href="#wishlist" class="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700">
                      <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                      My Wishlist (${wishlistCount})
                    </a>
                    <a href="#cart" class="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700">
                      <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                      My Cart (${cartCount})
                    </a>
                    <button 
                      onclick="window.novaStore.logout()"
                      class="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-rose-50 text-rose-600 font-medium transition-colors text-left"
                    >
                      <svg class="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ` : `
              <button 
                onclick="window.openAuthModal('login')"
                class="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
              >
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Sign In</span>
              </button>
            `}

          </div>
        </div>
      </div>
    </header>
  `;
}

// --- FOOTER COMPONENT ---
function renderFooter() {
  return `
    <footer class="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          <!-- Col 1: Brand & Bio -->
          <div class="lg:col-span-2 space-y-4">
            <a href="#home" class="flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-white shadow-md">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <span class="font-heading font-extrabold text-2xl text-white">Nova<span class="text-indigo-400">Cart</span></span>
            </a>
            <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
              Shop smart, live better. NovaCart brings you handpicked premium electronics, elevated fashion, precision timepieces, and artisan home essentials with seamless worldwide delivery.
            </p>
            
            <!-- Social Icons -->
            <div class="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full bg-slate-900 hover:bg-rose-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Quick Links -->
          <div>
            <h4 class="font-heading font-semibold text-white text-sm tracking-wide uppercase mb-4">Quick Links</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li><a href="#home" class="hover:text-white transition-colors">Home Showcase</a></li>
              <li><a href="#shop" class="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#deals" class="hover:text-white transition-colors">Flash Deals & Coupons</a></li>
              <li><a href="#wishlist" class="hover:text-white transition-colors">Saved Wishlist</a></li>
              <li><a href="#cart" class="hover:text-white transition-colors">Shopping Cart</a></li>
            </ul>
          </div>

          <!-- Col 3: Customer Care -->
          <div>
            <h4 class="font-heading font-semibold text-white text-sm tracking-wide uppercase mb-4">Customer Care</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li><a href="#about" class="hover:text-white transition-colors">About Our Vision</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">Warranty & Guarantee</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">FAQ & Help</a></li>
            </ul>
          </div>

          <!-- Col 4: Contact Info -->
          <div>
            <h4 class="font-heading font-semibold text-white text-sm tracking-wide uppercase mb-4">Store Headquarters</h4>
            <div class="space-y-3 text-sm text-slate-400">
              <p class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-indigo-400 mt-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>742 Evergreen Terrace, Suite 400<br/>San Francisco, CA 94107</span>
              </p>
              <p class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>support@novacart.store</span>
              </p>
              <p class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+1 (800) 555-NOVA</span>
              </p>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright & Safe Payment Badges -->
        <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 NovaCart Inc. All rights reserved. Designed with precision for modern online shopping.
          </div>
          <div class="flex items-center gap-3">
            <span class="text-slate-400 font-medium">Guaranteed Safe Checkout:</span>
            <div class="flex items-center gap-2">
              <span class="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-[10px] text-white">VISA</span>
              <span class="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-[10px] text-white">Mastercard</span>
              <span class="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-[10px] text-white">PayPal</span>
              <span class="px-2 py-1 bg-slate-900 border border-slate-800 rounded font-semibold text-[10px] text-white">Apple Pay</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  `;
}

// --- SLIDE-IN CART DRAWER COMPONENT ---
function renderCartDrawer() {
  const store = window.novaStore;
  const items = store.getCartItems();
  const totals = store.getCartTotals();
  const isOpen = store.cartDrawerOpen;

  return `
    <div id="cart-drawer" class="fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
      <!-- Backdrop -->
      <div 
        onclick="window.closeCartDrawer()"
        class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      ></div>

      <!-- Drawer Panel -->
      <div class="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}">
        
        <!-- Drawer Header -->
        <div class="p-5 border-b border-slate-100 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            <h3 class="font-heading font-bold text-slate-900 text-lg">Your Cart (${store.getCartCount()})</h3>
          </div>
          <button 
            onclick="window.closeCartDrawer()" 
            class="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Free Shipping Progress Bar -->
        <div class="bg-indigo-50/70 px-5 py-3 border-b border-indigo-100/60 text-xs">
          ${parseFloat(totals.subtotal) >= 50 ? `
            <div class="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <svg class="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
              <span>You've unlocked <strong>FREE Express Shipping!</strong></span>
            </div>
          ` : `
            <div class="space-y-1.5">
              <div class="flex justify-between font-medium text-slate-700">
                <span>Add <strong>$${(50 - parseFloat(totals.subtotal)).toFixed(2)}</strong> more for FREE shipping</span>
                <span class="text-indigo-600 font-bold">${Math.min(100, Math.round((parseFloat(totals.subtotal) / 50) * 100))}%</span>
              </div>
              <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div class="bg-indigo-600 h-full rounded-full transition-all duration-300" style="width: ${Math.min(100, (parseFloat(totals.subtotal) / 50) * 100)}%"></div>
              </div>
            </div>
          `}
        </div>

        <!-- Items Scroll Area -->
        <div class="flex-1 overflow-y-auto p-5 space-y-4">
          ${items.length === 0 ? `
            <div class="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              </div>
              <div>
                <h4 class="font-heading font-bold text-slate-800 text-lg">Your cart is empty</h4>
                <p class="text-xs text-slate-500 mt-1 max-w-xs">Discover our trending products and start adding items to your bag.</p>
              </div>
              <a 
                href="#shop" 
                onclick="window.closeCartDrawer()"
                class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-200 transition-all"
              >
                Browse Shop
              </a>
            </div>
          ` : items.map(item => `
            <div class="flex gap-4 p-3 bg-slate-50/70 rounded-2xl border border-slate-100 relative group">
              <img 
                src="${(item.product.images && item.product.images[0]) || FALLBACK_IMG}" 
                alt="${item.product.name}" 
                class="w-20 h-20 object-cover rounded-xl bg-white border border-slate-200 shrink-0 cursor-pointer"
                onclick="window.closeCartDrawer(); window.router.navigate('product-details', { id: '${item.product.id}' })"
              />
              <div class="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <div class="flex items-start justify-between gap-1">
                    <h4 
                      class="font-semibold text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-indigo-600 cursor-pointer"
                      onclick="window.closeCartDrawer(); window.router.navigate('product-details', { id: '${item.product.id}' })"
                    >
                      ${item.product.name}
                    </h4>
                    <button 
                      onclick="window.novaStore.removeFromCart('${item.id}', '${item.color}')"
                      class="text-slate-400 hover:text-rose-500 transition-colors p-0.5" 
                      title="Remove Item"
                    >
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                    </button>
                  </div>
                  <div class="text-[11px] text-slate-500 mt-0.5">Color: <span class="font-medium text-slate-700">${item.color}</span></div>
                </div>

                <div class="flex items-center justify-between mt-2">
                  <div class="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-xs">
                    <button 
                      onclick="window.novaStore.updateQuantity('${item.id}', -1, '${item.color}')"
                      class="px-2 py-0.5 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors"
                    >−</button>
                    <span class="px-2.5 py-0.5 text-xs font-bold text-slate-800">${item.quantity}</span>
                    <button 
                      onclick="window.novaStore.updateQuantity('${item.id}', 1, '${item.color}')"
                      class="px-2 py-0.5 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors"
                    >+</button>
                  </div>
                  <div class="font-extrabold text-sm text-slate-900">$${item.totalPrice}</div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Footer / Checkout Button -->
        ${items.length > 0 ? `
          <div class="p-5 border-t border-slate-100 bg-slate-50/50 space-y-3">
            <div class="space-y-1.5 text-xs text-slate-600">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span class="font-bold text-slate-900">$${totals.subtotal}</span>
              </div>
              ${parseFloat(totals.discount) > 0 ? `
                <div class="flex justify-between text-emerald-600 font-medium">
                  <span>Discount</span>
                  <span>-$${totals.discount}</span>
                </div>
              ` : ""}
              <div class="flex justify-between">
                <span>Shipping</span>
                <span>${totals.freeShipping ? '<strong class="text-emerald-600">FREE</strong>' : `$${totals.shipping}`}</span>
              </div>
              <div class="flex justify-between font-bold text-base text-slate-900 pt-2 border-t border-slate-200">
                <span>Total</span>
                <span class="text-indigo-600 font-extrabold text-lg">$${totals.grandTotal}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2 pt-1">
              <a 
                href="#cart" 
                onclick="window.closeCartDrawer()"
                class="py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs font-semibold text-center transition-colors shadow-xs"
              >
                View Full Cart
              </a>
              <a 
                href="#checkout" 
                onclick="window.closeCartDrawer()"
                class="py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold text-center shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-1.5"
              >
                Checkout
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        ` : ""}

      </div>
    </div>
  `;
}

// --- QUICK VIEW MODAL COMPONENT ---
function renderQuickViewModal() {
  const product = window.novaStore.quickViewProduct;
  if (!product) return "";

  const isWishlisted = window.novaStore.isInWishlist(product.id);
  const primaryImg = (product.images && product.images[0]) || FALLBACK_IMG;

  return `
    <div id="quick-view-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div 
        onclick="window.closeQuickView()"
        class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      ></div>

      <!-- Modal Card -->
      <div class="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 z-10 animate-fade-in p-6 sm:p-8">
        <button 
          onclick="window.closeQuickView()"
          class="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-20"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          <!-- Image -->
          <div class="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/80">
            <img src="${primaryImg}" alt="${product.name}" class="w-full h-full object-cover">
          </div>

          <!-- Product Summary -->
          <div class="space-y-4">
            <div>
              <span class="text-xs uppercase font-bold text-indigo-600 tracking-wider">${product.category}</span>
              <h3 class="font-heading font-bold text-slate-900 text-xl mt-1">${product.name}</h3>
              
              <div class="flex items-center gap-2 mt-2">
                <div class="flex">${renderStars(product.rating)}</div>
                <span class="text-xs font-semibold text-slate-700">${product.rating}</span>
                <span class="text-xs text-slate-400">(${product.reviewsCount} reviews)</span>
              </div>
            </div>

            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-extrabold text-slate-900">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<span class="text-sm text-slate-400 line-through">$${product.originalPrice.toFixed(2)}</span>` : ""}
              ${product.discount ? `<span class="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">Save ${product.discount}%</span>` : ""}
            </div>

            <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
              ${product.description}
            </p>

            <!-- Quantity & Actions -->
            <div class="space-y-3 pt-2 border-t border-slate-100">
              <div class="flex items-center gap-3">
                <button 
                  onclick="window.novaStore.addToCart('${product.id}', 1); window.closeQuickView();"
                  class="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2"
                >
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  Add to Cart
                </button>

                <button 
                  onclick="window.novaStore.toggleWishlist('${product.id}')"
                  class="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-rose-500 transition-colors"
                >
                  <svg class="w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </button>
              </div>

              <a 
                href="#product-details?id=${product.id}"
                onclick="window.closeQuickView()"
                class="block text-center text-xs font-semibold text-indigo-600 hover:underline"
              >
                View Complete Specifications & All Photos →
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  `;
}

// --- AUTH MODAL COMPONENT (LOGIN / SIGNUP) ---
function renderAuthModal() {
  const isVisible = window.authModalOpen || false;
  const mode = window.authModalMode || "login"; // 'login' or 'signup'
  if (!isVisible) return "";

  return `
    <div id="auth-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onclick="window.closeAuthModal()" class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

      <div class="relative bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 z-10 animate-fade-in p-6 sm:p-8">
        <button 
          onclick="window.closeAuthModal()"
          class="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <!-- Brand Icon -->
        <div class="w-12 h-12 rounded-2xl gradient-accent flex items-center justify-center text-white mx-auto shadow-md mb-4">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>

        <h3 class="font-heading font-bold text-center text-slate-900 text-2xl">
          ${mode === 'login' ? 'Welcome Back' : 'Create an Account'}
        </h3>
        <p class="text-xs text-center text-slate-500 mt-1 mb-6">
          ${mode === 'login' ? 'Access your orders, saved wishlist, and custom offers.' : 'Join NovaCart for member discounts and priority express delivery.'}
        </p>

        <!-- Quick 1-Click Demo Login Button for evaluation -->
        <button 
          onclick="window.novaStore.login('alex.morgan@example.com', 'Alex Morgan'); window.closeAuthModal();"
          class="w-full mb-4 py-2.5 px-4 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
        >
          <span>⚡ Fast 1-Click Demo Login (Alex Morgan)</span>
        </button>

        <div class="relative flex items-center justify-center mb-5">
          <div class="border-t border-slate-200 w-full"></div>
          <span class="bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">or email</span>
        </div>

        <form onsubmit="window.handleAuthSubmit(event, '${mode}')" class="space-y-3.5">
          ${mode === 'signup' ? `
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="e.g. Sarah Connor"
                class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none transition-all"
              />
            </div>
          ` : ""}

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="you@domain.com"
              class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none transition-all"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="block text-xs font-bold text-slate-700">Password</label>
              ${mode === 'login' ? `<a href="javascript:void(0)" onclick="window.novaStore.showToast('Password Reset', 'Password recovery instructions sent to your email.', 'info')" class="text-[11px] font-semibold text-indigo-600 hover:underline">Forgot?</a>` : ""}
            </div>
            <input 
              type="password" 
              name="password" 
              required 
              placeholder="••••••••"
              class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none transition-all"
            />
          </div>

          ${mode === 'signup' ? `
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword" 
                required 
                placeholder="••••••••"
                class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-indigo-500 focus:outline-none transition-all"
              />
            </div>
          ` : ""}

          <div class="flex items-center gap-2 pt-1">
            <input type="checkbox" id="remember-me" checked class="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500">
            <label for="remember-me" class="text-xs text-slate-600 select-none">Remember this device</label>
          </div>

          <button 
            type="submit" 
            class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-indigo-200 transition-all cursor-pointer mt-2"
          >
            ${mode === 'login' ? 'Sign In to Account' : 'Create Free Account'}
          </button>
        </form>

        <!-- Toggle Mode -->
        <div class="text-center text-xs text-slate-500 mt-5 pt-4 border-t border-slate-100">
          ${mode === 'login' ? `
            Don't have an account yet? 
            <button onclick="window.openAuthModal('signup')" class="font-bold text-indigo-600 hover:underline ml-1">Sign Up Free</button>
          ` : `
            Already have an account? 
            <button onclick="window.openAuthModal('login')" class="font-bold text-indigo-600 hover:underline ml-1">Sign In</button>
          `}
        </div>

      </div>
    </div>
  `;
}

// --- MOBILE MENU DRAWER ---
function renderMobileMenu() {
  const isOpen = window.novaStore ? window.novaStore.mobileMenuOpen : false;
  return `
    <div id="mobile-menu-drawer" class="fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
      <div onclick="window.toggleMobileMenu(false)" class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

      <div class="absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}">
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between pb-6 border-b border-slate-100">
            <a href="#home" onclick="window.toggleMobileMenu(false)" class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center text-white">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <span class="font-heading font-extrabold text-xl text-slate-900">Nova<span class="text-indigo-600">Cart</span></span>
            </a>
            <button onclick="window.toggleMobileMenu(false)" class="p-2 rounded-lg text-slate-400 hover:bg-slate-100">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <!-- Mobile Search Input -->
          <div class="mt-4">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                onkeydown="if(event.key==='Enter') { window.submitHeaderSearch(this.value); window.toggleMobileMenu(false); }"
                class="w-full pl-9 pr-4 py-2.5 bg-slate-100 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>

          <!-- Links -->
          <nav class="space-y-1.5 mt-6 font-semibold text-sm text-slate-700">
            <a href="#home" onclick="window.toggleMobileMenu(false)" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50 hover:text-indigo-600">
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Home
            </a>
            <a href="#shop" onclick="window.toggleMobileMenu(false)" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50 hover:text-indigo-600">
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
              All Products
            </a>
            <a href="#deals" onclick="window.toggleMobileMenu(false)" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-rose-50 hover:text-rose-600">
              <svg class="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              Flash Deals & Offers
            </a>
            <a href="#wishlist" onclick="window.toggleMobileMenu(false)" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50 hover:text-indigo-600">
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Wishlist (${window.novaStore.wishlist.length})
            </a>
            <a href="#cart" onclick="window.toggleMobileMenu(false)" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50 hover:text-indigo-600">
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              Shopping Cart (${window.novaStore.getCartCount()})
            </a>
            <a href="#about" onclick="window.toggleMobileMenu(false)" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50 hover:text-indigo-600">
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
              About NovaCart
            </a>
            <a href="#contact" onclick="window.toggleMobileMenu(false)" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50 hover:text-indigo-600">
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Contact Support
            </a>
          </nav>
        </div>

        <!-- User bottom section -->
        <div class="pt-6 border-t border-slate-100">
          ${window.novaStore.user.isLoggedIn ? `
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <img src="${window.novaStore.user.avatar}" class="w-9 h-9 rounded-full object-cover">
                <div>
                  <div class="text-xs font-bold text-slate-900">${window.novaStore.user.name}</div>
                  <div class="text-[10px] text-slate-400">${window.novaStore.user.email}</div>
                </div>
              </div>
              <button onclick="window.novaStore.logout(); window.toggleMobileMenu(false);" class="text-xs text-rose-600 font-bold hover:underline">Logout</button>
            </div>
          ` : `
            <button 
              onclick="window.openAuthModal('login'); window.toggleMobileMenu(false);"
              class="w-full py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-200"
            >
              Sign In / Register
            </button>
          `}
        </div>
      </div>
    </div>
  `;
}
