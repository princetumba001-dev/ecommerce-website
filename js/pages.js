/**
 * NovaCart Page Views
 * Renders Home, Shop, Product Details, Cart, Checkout, Order Success, Wishlist,
 * Deals, About, and Contact pages.
 */

// Helper to format currency
function formatPrice(val) {
  return `$${Number(val).toFixed(2)}`;
}

// --- 1. HOMEPAGE VIEW ---
function renderHomePage() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 8);
  const flashSaleProducts = PRODUCTS.filter(p => p.isFlashSale).slice(0, 4);

  return `
    <div class="space-y-16 sm:space-y-24 pb-20 animate-fade-in">
      
      <!-- HERO SECTION -->
      <section class="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white pt-8 pb-12 sm:pt-16 sm:pb-20 border-b border-slate-100">
        <!-- Background Ambient Glow -->
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              <!-- Announcement Badge -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200/60 text-indigo-700 text-xs font-semibold shadow-xs">
                <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                <span>New Season Collection 2026</span>
                <span class="text-indigo-400">|</span>
                <span class="text-slate-600 font-medium">Over 24+ Curated Essentials</span>
              </div>

              <!-- Main Hero Headline -->
              <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Shop Smart.<br/>
                <span class="gradient-text">Live Better.</span>
              </h1>

              <!-- Subtitle -->
              <p class="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Elevate your everyday lifestyle with high-performance audio, tailored apparel, precision timepieces, and artisan home essentials—all backed by our 30-day guarantee.
              </p>

              <!-- Action CTAs -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="#shop" 
                  class="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-indigo-300/50 transition-all flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  Shop Now
                </a>
                <a 
                  href="#deals" 
                  class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 active:scale-95 text-slate-800 border border-slate-200/90 rounded-2xl font-bold text-sm sm:text-base shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                  Explore Deals
                </a>
              </div>

              <!-- Trust Stats Row -->
              <div class="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div class="font-heading font-extrabold text-2xl text-slate-900">50K+</div>
                  <div class="text-xs text-slate-500 font-medium">Happy Shoppers</div>
                </div>
                <div>
                  <div class="font-heading font-extrabold text-2xl text-slate-900 flex items-center justify-center lg:justify-start gap-1">
                    4.9 <svg class="w-4 h-4 fill-amber-400 text-amber-400 inline" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div class="text-xs text-slate-500 font-medium">Customer Rating</div>
                </div>
                <div>
                  <div class="font-heading font-extrabold text-2xl text-slate-900">Free</div>
                  <div class="text-xs text-slate-500 font-medium">Express Delivery</div>
                </div>
              </div>

            </div>

            <!-- Right Hero Visual Showcase -->
            <div class="lg:col-span-5 relative flex justify-center">
              
              <!-- Main Showcase Card -->
              <div class="relative w-full max-w-md bg-white rounded-3xl p-4 shadow-2xl border border-slate-200/80 group">
                
                <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" 
                    alt="Nova Pro ANC Headphones" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <!-- Floating Badge -->
                  <div class="absolute top-4 left-4 bg-rose-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                    HOT DEAL -33%
                  </div>
                </div>

                <!-- Showcase details -->
                <div class="p-4 space-y-3">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-xs uppercase font-bold text-indigo-600">Featured Highlight</span>
                      <h3 class="font-heading font-bold text-slate-900 text-lg">Nova Pro Wireless ANC</h3>
                    </div>
                    <div class="text-right">
                      <div class="font-extrabold text-xl text-slate-900">$199.99</div>
                      <div class="text-xs text-slate-400 line-through">$299.99</div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div class="flex items-center gap-1.5 text-xs text-slate-600">
                      <div class="flex">${renderStars(4.9)}</div>
                      <span class="font-bold text-slate-800">4.9</span>
                      <span class="text-slate-400">(328)</span>
                    </div>

                    <button 
                      onclick="window.novaStore.addToCart('elec-1', 1)"
                      class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-200 transition-all flex items-center gap-1.5"
                    >
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                      Add to Bag
                    </button>
                  </div>
                </div>

                <!-- Floating Glass Floating Avatar Pill -->
                <div class="absolute -bottom-6 -left-6 glass-card p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-200 hidden sm:flex">
                  <div class="flex -space-x-2">
                    <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80">
                    <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80">
                    <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80">
                  </div>
                  <div class="text-xs">
                    <div class="font-bold text-slate-900">Loved by 50k+</div>
                    <div class="text-[10px] text-slate-500">Verified buyers worldwide</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- CATEGORIES SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div class="text-xs uppercase font-extrabold text-indigo-600 tracking-wider">Explore Collections</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">Shop by Category</h2>
          </div>
          <a href="#shop" class="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group">
            Browse All Categories
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        <!-- 6 Categories Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          ${CATEGORIES.map(cat => `
            <div 
              onclick="window.novaStore.setFilter('category', '${cat.id}'); window.router.navigate('shop');"
              class="group relative bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 text-center cursor-pointer hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div class="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-3 relative">
                <img 
                  src="${cat.image}" 
                  alt="${cat.name}" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 class="font-heading font-bold text-slate-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors">${cat.name}</h3>
              <p class="text-[11px] text-slate-400 font-medium mt-0.5">${cat.itemCount}+ Items</p>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- FLASH SALE SECTION WITH LIVE COUNTDOWN -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          
          <!-- Background Glow Effect -->
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <!-- Top Header & Timer Row -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div class="space-y-1">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider">
                <svg class="w-3.5 h-3.5 text-rose-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                Limited Time Flash Deals
              </div>
              <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-white">Deal of the Day</h2>
              <p class="text-xs sm:text-sm text-slate-300">Unbeatable prices on flagship gear. Grab yours before stocks run out.</p>
            </div>

            <!-- Real-time Countdown Timer -->
            <div class="flex items-center gap-3">
              <div class="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl px-3.5 py-2 border border-white/15 min-w-[60px]">
                <span id="countdown-hours" class="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wider">08</span>
                <span class="text-[10px] uppercase font-bold text-slate-400">Hours</span>
              </div>
              <span class="font-bold text-xl text-slate-500">:</span>
              <div class="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl px-3.5 py-2 border border-white/15 min-w-[60px]">
                <span id="countdown-minutes" class="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wider">42</span>
                <span class="text-[10px] uppercase font-bold text-slate-400">Mins</span>
              </div>
              <span class="font-bold text-xl text-slate-500">:</span>
              <div class="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl px-3.5 py-2 border border-white/15 min-w-[60px]">
                <span id="countdown-seconds" class="font-heading font-extrabold text-xl sm:text-2xl text-rose-400 tracking-wider">19</span>
                <span class="text-[10px] uppercase font-bold text-slate-400">Secs</span>
              </div>
            </div>
          </div>

          <!-- Flash Deals Product Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            ${flashSaleProducts.map(product => `
              <div class="bg-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between text-slate-900 group shadow-lg hover:-translate-y-1 transition-all">
                <div class="relative aspect-square rounded-xl overflow-hidden bg-slate-100 cursor-pointer" onclick="window.router.navigate('product-details', { id: '${product.id}' })">
                  <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                  <span class="absolute top-2 left-2 badge-pill bg-rose-600 text-white font-extrabold">Save ${product.discount}%</span>
                </div>
                
                <div class="mt-3 space-y-1">
                  <div class="text-[11px] font-bold text-indigo-600 uppercase">${product.category}</div>
                  <h4 
                    onclick="window.router.navigate('product-details', { id: '${product.id}' })"
                    class="font-heading font-bold text-sm line-clamp-1 hover:text-indigo-600 cursor-pointer"
                  >
                    ${product.name}
                  </h4>
                  
                  <div class="flex items-baseline gap-2 pt-1">
                    <span class="font-extrabold text-base text-slate-900">$${product.price.toFixed(2)}</span>
                    <span class="text-xs text-slate-400 line-through">$${product.originalPrice.toFixed(2)}</span>
                  </div>

                  <!-- Claimed Progress Bar -->
                  <div class="pt-2">
                    <div class="flex justify-between text-[10px] font-semibold text-slate-500 mb-1">
                      <span>Claimed: 84%</span>
                      <span class="text-rose-600 font-bold">Only ${product.stock} left</span>
                    </div>
                    <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div class="bg-rose-500 h-full rounded-full" style="width: 84%"></div>
                    </div>
                  </div>
                </div>

                <button 
                  onclick="window.novaStore.addToCart('${product.id}', 1)"
                  class="mt-4 w-full py-2.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  Grab the Deal
                </button>
              </div>
            `).join("")}
          </div>

        </div>
      </section>

      <!-- FEATURED PRODUCTS SECTION WITH TABS -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div class="text-xs uppercase font-extrabold text-indigo-600 tracking-wider">Top Rated Essentials</div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">Featured Products</h2>
          </div>
          <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
            <button onclick="window.filterFeaturedTab('all')" class="featured-tab active px-3.5 py-1.5 rounded-full bg-indigo-600 text-white">All</button>
            <button onclick="window.filterFeaturedTab('electronics')" class="featured-tab px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">Electronics</button>
            <button onclick="window.filterFeaturedTab('fashion')" class="featured-tab px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">Fashion</button>
            <button onclick="window.filterFeaturedTab('shoes')" class="featured-tab px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">Shoes</button>
            <button onclick="window.filterFeaturedTab('watches')" class="featured-tab px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">Watches</button>
          </div>
        </div>

        <!-- Featured Grid -->
        <div id="featured-products-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          ${featuredProducts.map(renderProductCard).join("")}
        </div>

        <div class="text-center mt-12">
          <a 
            href="#shop" 
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            Explore Full Catalog (24+ Products)
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      <!-- WHY CHOOSE US (4 CORE BENEFITS) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-10">
          <div class="text-xs uppercase font-extrabold text-indigo-600 tracking-wider">The NovaCart Advantage</div>
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">Why Choose NovaCart</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${WHY_CHOOSE_US.map(benefit => `
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
                  ${benefit.icon === 'truck' ? `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10Z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>` : ""}
                  ${benefit.icon === 'shield-check' ? `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>` : ""}
                  ${benefit.icon === 'refresh-cw' ? `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>` : ""}
                  ${benefit.icon === 'headphones' ? `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>` : ""}
                </div>
                <h3 class="font-heading font-bold text-slate-900 text-lg mb-2">${benefit.title}</h3>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">${benefit.description}</p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-indigo-600">
                ${benefit.highlight}
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- CUSTOMER REVIEWS / TESTIMONIALS -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-10">
          <div class="text-xs uppercase font-extrabold text-indigo-600 tracking-wider">Real Feedback</div>
          <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">What Our Customers Say</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${TESTIMONIALS.map(t => `
            <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-1 text-amber-400 mb-3">
                  ${renderStars(t.rating)}
                </div>
                <p class="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "${t.comment}"
                </p>
              </div>

              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover border border-slate-200">
                <div>
                  <div class="font-heading font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1">
                    ${t.name}
                    ${t.verified ? `<svg class="w-3.5 h-3.5 text-indigo-600 fill-indigo-100" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>` : ""}
                  </div>
                  <div class="text-[10px] text-slate-400 truncate max-w-[140px]">${t.role}</div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- NEWSLETTER SUBSCRIPTION SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div class="max-w-xl mx-auto space-y-4">
            <span class="px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">Exclusive Member Perks</span>
            <h2 class="font-heading font-extrabold text-2xl sm:text-4xl text-white">Get 15% Off Your Next Order</h2>
            <p class="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Subscribe to the NovaCart newsletter for private seasonal sale access, design drops, and insider styling tips.
            </p>

            <form onsubmit="window.handleNewsletterSubmit(event)" class="flex flex-col sm:flex-row gap-2 pt-2">
              <input 
                type="email" 
                name="newsletterEmail" 
                required 
                placeholder="Enter your email address..."
                class="flex-1 px-4 py-3 bg-white/95 rounded-2xl text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button 
                type="submit" 
                class="px-6 py-3 bg-slate-950 hover:bg-slate-900 active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            <p class="text-[10px] text-indigo-200">No spam, unsubscribe anytime. Instant promo code delivered on submit.</p>
          </div>
        </div>
      </section>

    </div>
  `;
}

// --- 2. SHOP PAGE VIEW ---
function renderShopPage() {
  const store = window.novaStore;
  const filteredProducts = store.getFilteredProducts();
  const filters = store.filters;

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
      
      <!-- Shop Header & Breadcrumb -->
      <div class="mb-8">
        <div class="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <a href="#home" class="hover:text-indigo-600 transition-colors">Home</a>
          <span>/</span>
          <span class="text-slate-800 font-semibold">Shop Catalog</span>
        </div>
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">All Products</h1>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">Discover our full premium collection engineered for modern life.</p>
          </div>

          <!-- Mobile Filter Toggle Button -->
          <div class="flex items-center gap-3 lg:hidden">
            <button 
              onclick="window.toggleShopFilterDrawer()"
              class="w-full py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 flex items-center justify-center gap-2 shadow-xs"
            >
              <svg class="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="21" y2="21"/><line x1="4" x2="20" y1="14" y2="14"/><line x1="4" x2="20" y1="7" y2="7"/><circle cx="8" cy="7" r="3"/><circle cx="16" cy="14" r="3"/><circle cx="10" cy="21" r="3"/></svg>
              Filter & Sort
            </button>
          </div>
        </div>
      </div>

      <!-- Main Layout: Sidebar Filters + Products Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- Desktop Sidebar Filters -->
        <aside class="hidden lg:block space-y-6">
          <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 class="font-heading font-bold text-slate-900 text-base">Filters</h3>
              <button 
                onclick="window.novaStore.resetFilters()"
                class="text-xs text-indigo-600 font-bold hover:underline"
              >
                Reset All
              </button>
            </div>

            <!-- Search Filter -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Search</label>
              <div class="relative">
                <input 
                  type="text" 
                  value="${filters.search}"
                  placeholder="Keyword..." 
                  oninput="window.novaStore.setFilter('search', this.value)"
                  class="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-indigo-500"
                />
                <svg class="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
            </div>

            <!-- Category Radio Group -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Category</label>
              <div class="space-y-1.5 text-xs">
                <button 
                  onclick="window.novaStore.setFilter('category', 'all')"
                  class="w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${filters.category === 'all' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}"
                >
                  <span>All Categories</span>
                  <span class="text-slate-400">${PRODUCTS.length}</span>
                </button>
                ${CATEGORIES.map(cat => `
                  <button 
                    onclick="window.novaStore.setFilter('category', '${cat.id}')"
                    class="w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${filters.category === cat.id ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}"
                  >
                    <span>${cat.name}</span>
                    <span class="text-slate-400">${PRODUCTS.filter(p => p.category === cat.id).length}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Price Range Filter -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase tracking-wider text-slate-500">Max Price</label>
                <span class="text-xs font-extrabold text-indigo-600">$${filters.maxPrice}</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="800" 
                step="10"
                value="${filters.maxPrice}" 
                oninput="window.novaStore.setFilter('maxPrice', Number(this.value))"
                class="w-full accent-indigo-600 cursor-pointer"
              />
              <div class="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                <span>$30</span>
                <span>$800</span>
              </div>
            </div>

            <!-- Minimum Rating Filter -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Minimum Rating</label>
              <div class="space-y-1 text-xs">
                <button 
                  onclick="window.novaStore.setFilter('minRating', 0)"
                  class="w-full text-left px-3 py-1.5 rounded-lg transition-colors ${filters.minRating === 0 ? 'bg-indigo-50 font-bold text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}"
                >
                  Any Rating
                </button>
                <button 
                  onclick="window.novaStore.setFilter('minRating', 4.5)"
                  class="w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between ${filters.minRating === 4.5 ? 'bg-indigo-50 font-bold text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}"
                >
                  <span class="flex items-center gap-1">4.5 ★ & above</span>
                  <span class="text-[10px] text-slate-400">★ ★ ★ ★ ☆</span>
                </button>
                <button 
                  onclick="window.novaStore.setFilter('minRating', 4.8)"
                  class="w-full text-left px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between ${filters.minRating === 4.8 ? 'bg-indigo-50 font-bold text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}"
                >
                  <span class="flex items-center gap-1">4.8 ★ & above</span>
                  <span class="text-[10px] text-slate-400">★ ★ ★ ★ ★</span>
                </button>
              </div>
            </div>

            <!-- In Stock Checkbox -->
            <div class="pt-2 border-t border-slate-100 flex items-center gap-2">
              <input 
                type="checkbox" 
                id="filter-in-stock" 
                ${filters.inStockOnly ? 'checked' : ''}
                onchange="window.novaStore.setFilter('inStockOnly', this.checked)"
                class="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500"
              />
              <label for="filter-in-stock" class="text-xs font-semibold text-slate-700 select-none cursor-pointer">
                In Stock Items Only
              </label>
            </div>

          </div>
        </aside>

        <!-- Right Side: Product Catalog Grid -->
        <main class="lg:col-span-3 space-y-6">
          
          <!-- Top Sort & Active Filters Bar -->
          <div class="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="text-xs text-slate-600">
              Showing <strong class="text-slate-900">${filteredProducts.length}</strong> of ${PRODUCTS.length} products
            </div>

            <!-- Sort dropdown -->
            <div class="flex items-center gap-2 text-xs">
              <span class="text-slate-500 font-semibold">Sort By:</span>
              <select 
                onchange="window.novaStore.setFilter('sort', this.value)"
                class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:bg-white focus:outline-none focus:border-indigo-500"
              >
                <option value="featured" ${filters.sort === 'featured' ? 'selected' : ''}>Featured Selection</option>
                <option value="price-low" ${filters.sort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                <option value="price-high" ${filters.sort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                <option value="rating" ${filters.sort === 'rating' ? 'selected' : ''}>Highest Rated (Stars)</option>
                <option value="discount" ${filters.sort === 'discount' ? 'selected' : ''}>Biggest Discounts</option>
                <option value="newest" ${filters.sort === 'newest' ? 'selected' : ''}>New Arrivals</option>
              </select>
            </div>
          </div>

          <!-- Product Grid -->
          ${filteredProducts.length === 0 ? `
            <div class="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-4 shadow-xs">
              <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <div>
                <h3 class="font-heading font-bold text-slate-900 text-lg">No matching products</h3>
                <p class="text-xs text-slate-500 mt-1">Try adjusting your category, price range, or search keywords.</p>
              </div>
              <button 
                onclick="window.novaStore.resetFilters()"
                class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-200 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              ${filteredProducts.map(renderProductCard).join("")}
            </div>
          `}

        </main>
      </div>
    </div>
  `;
}

// --- 3. PRODUCT DETAILS PAGE VIEW ---
function renderProductDetailsPage(productId) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const isWishlisted = window.novaStore ? window.novaStore.isInWishlist(product.id) : false;
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  // Store selected active image index and color in window state
  if (window.selectedDetailImgIndex === undefined) window.selectedDetailImgIndex = 0;
  if (!window.selectedColor) window.selectedColor = (product.colors && product.colors[0]) ? product.colors[0].name : "Default";
  if (!window.selectedQuantity) window.selectedQuantity = 1;

  const activeImg = (product.images && product.images[window.selectedDetailImgIndex]) || product.images[0] || FALLBACK_IMG;

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in space-y-16">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs text-slate-400">
        <a href="#home" class="hover:text-indigo-600 transition-colors">Home</a>
        <span>/</span>
        <a href="#shop" class="hover:text-indigo-600 transition-colors">Shop</a>
        <span>/</span>
        <a href="#shop" onclick="window.novaStore.setFilter('category', '${product.category}')" class="hover:text-indigo-600 uppercase font-semibold text-[11px] transition-colors">${product.category}</a>
        <span>/</span>
        <span class="text-slate-800 font-semibold truncate max-w-xs">${product.name}</span>
      </nav>

      <!-- Main Product View: Left Gallery + Right Info -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left: Image Gallery (5 cols) -->
        <div class="lg:col-span-6 space-y-4">
          <!-- Main Hero Image with Hover Zoom Container -->
          <div class="detail-main-img-wrap aspect-square rounded-3xl bg-slate-100 overflow-hidden border border-slate-200/80 shadow-xs relative">
            <img 
              id="detail-main-img" 
              src="${activeImg}" 
              alt="${product.name}" 
              class="w-full h-full object-cover"
            />
            ${product.badge ? `<span class="absolute top-4 left-4 badge-pill bg-indigo-600 text-white shadow-md">${product.badge}</span>` : ""}
            ${product.discount ? `<span class="absolute top-4 right-4 badge-pill bg-rose-600 text-white shadow-md font-extrabold">Save ${product.discount}%</span>` : ""}
          </div>

          <!-- Thumbnails Row -->
          <div class="flex items-center gap-3 overflow-x-auto pb-1">
            ${product.images.map((img, idx) => `
              <button 
                onclick="window.setDetailImage(${idx})"
                class="w-20 h-20 rounded-2xl overflow-hidden border-2 bg-slate-100 shrink-0 transition-all ${idx === window.selectedDetailImgIndex ? 'border-indigo-600 shadow-md scale-95' : 'border-slate-200 hover:border-slate-400'}"
              >
                <img src="${img}" class="w-full h-full object-cover">
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Right: Purchasing Details (7 cols) -->
        <div class="lg:col-span-6 space-y-6">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span class="uppercase tracking-widest font-extrabold text-indigo-600">${product.category}</span>
              ${product.stock > 0 ? `<span class="text-emerald-600 font-bold flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> In Stock (${product.stock} units left)</span>` : `<span class="text-rose-600 font-bold">Out of stock</span>`}
            </div>
            
            <h1 class="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight">
              ${product.name}
            </h1>

            <!-- Rating badge -->
            <div class="flex items-center gap-2 mt-3">
              <div class="flex">${renderStars(product.rating)}</div>
              <span class="font-extrabold text-sm text-slate-800">${product.rating}</span>
              <span class="text-xs text-slate-400">(${product.reviewsCount} customer reviews)</span>
            </div>
          </div>

          <!-- Pricing Block -->
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-baseline gap-3">
            <span class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="text-base text-slate-400 line-through">$${product.originalPrice.toFixed(2)}</span>` : ""}
            ${product.discount ? `<span class="text-xs font-bold text-rose-600 bg-rose-100/70 border border-rose-200 px-2.5 py-0.5 rounded-full">Save ${(product.originalPrice - product.price).toFixed(2)} (${product.discount}%)</span>` : ""}
          </div>

          <!-- Promo Banner Coupons -->
          <div class="p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="font-bold text-indigo-900">⚡ Extra 20% Off:</span>
              <span class="text-indigo-700">Use promo code <strong class="text-indigo-950 font-extrabold">NOVA20</strong></span>
            </div>
            <button 
              onclick="window.novaStore.applyCoupon('NOVA20')"
              class="px-2.5 py-1 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
            >
              Apply
            </button>
          </div>

          <!-- Short Description -->
          <p class="text-slate-600 text-sm leading-relaxed">
            ${product.description}
          </p>

          <!-- Color Variations Selector -->
          ${product.colors && product.colors.length > 0 ? `
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Color: <span class="text-slate-900 font-extrabold" id="selected-color-label">${window.selectedColor}</span>
              </label>
              <div class="flex items-center gap-2.5">
                ${product.colors.map(col => `
                  <button 
                    onclick="window.setSelectedColor('${col.name}')"
                    class="w-9 h-9 rounded-full border-2 transition-all p-0.5 ${window.selectedColor === col.name ? 'border-indigo-600 ring-2 ring-indigo-200 scale-110' : 'border-slate-300 hover:border-slate-400'}"
                    title="${col.name}"
                  >
                    <span class="block w-full h-full rounded-full border border-black/10" style="background-color: ${col.hex}"></span>
                  </button>
                `).join("")}
              </div>
            </div>
          ` : ""}

          <!-- Quantity Selector & Action CTAs -->
          <div class="space-y-3 pt-3 border-t border-slate-100">
            <div class="flex items-center gap-4">
              <!-- Quantity stepper -->
              <div class="flex items-center border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs">
                <button 
                  onclick="window.changeDetailQty(-1)"
                  class="px-3.5 py-3 hover:bg-slate-100 text-slate-700 font-bold transition-colors"
                >−</button>
                <input 
                  type="text" 
                  id="detail-qty-input" 
                  readonly 
                  value="${window.selectedQuantity || 1}"
                  class="w-12 text-center text-sm font-extrabold text-slate-900 bg-transparent focus:outline-none"
                />
                <button 
                  onclick="window.changeDetailQty(1)"
                  class="px-3.5 py-3 hover:bg-slate-100 text-slate-700 font-bold transition-colors"
                >+</button>
              </div>

              <!-- Add to Cart CTA -->
              <button 
                onclick="window.novaStore.addToCart('${product.id}', window.selectedQuantity || 1, window.selectedColor)"
                class="flex-1 py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-2xl font-bold text-sm shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                Add to Cart
              </button>

              <!-- Wishlist toggle -->
              <button 
                onclick="window.novaStore.toggleWishlist('${product.id}')"
                class="p-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-rose-500 transition-colors"
                title="Save to Wishlist"
              >
                <svg class="w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>

            <!-- Instant Buy Now Button -->
            <button 
              onclick="window.handleBuyNow('${product.id}', window.selectedQuantity || 1, window.selectedColor)"
              class="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white rounded-2xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>⚡ Buy Now with 1-Click Checkout</span>
            </button>
          </div>

          <!-- Delivery & Guarantees List -->
          <div class="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-indigo-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10Z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
              <span>Free Delivery in 3-5 days</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              <span>Authentic 2-Year Warranty</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-indigo-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
              <span>30-Day Hassle Returns</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              <span>Secure Encrypted Checkout</span>
            </div>
          </div>

        </div>

      </div>

      <!-- TABS: Description, Specifications, Reviews -->
      <div class="pt-10 border-t border-slate-200">
        <div class="flex border-b border-slate-200 gap-6 text-sm font-bold">
          <button onclick="window.setDetailTab('desc')" id="tab-btn-desc" class="detail-tab pb-3 text-indigo-600 border-b-2 border-indigo-600">Product Highlights</button>
          <button onclick="window.setDetailTab('specs')" id="tab-btn-specs" class="detail-tab pb-3 text-slate-500 hover:text-slate-900 border-b-2 border-transparent">Technical Specifications</button>
          <button onclick="window.setDetailTab('reviews')" id="tab-btn-reviews" class="detail-tab pb-3 text-slate-500 hover:text-slate-900 border-b-2 border-transparent">Reviews (${product.customerReviews ? product.customerReviews.length : 0})</button>
        </div>

        <div class="pt-6">
          <!-- Highlights Tab -->
          <div id="tab-content-desc" class="space-y-4 max-w-3xl">
            <h3 class="font-heading font-bold text-slate-900 text-lg">Key Features</h3>
            <ul class="space-y-2.5">
              ${(product.highlights || []).map(hl => `
                <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <svg class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>${hl}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Specs Tab -->
          <div id="tab-content-specs" class="hidden max-w-2xl">
            <div class="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
              ${Object.entries(product.specs || {}).map(([key, val]) => `
                <div class="grid grid-cols-2 p-3.5 bg-white">
                  <span class="font-bold text-slate-700">${key}</span>
                  <span class="text-slate-600">${val}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Customer Reviews Tab -->
          <div id="tab-content-reviews" class="hidden space-y-8 max-w-3xl">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 class="font-heading font-bold text-slate-900 text-lg">Verified Customer Reviews</h3>
                <div class="flex items-center gap-2 mt-1">
                  <div class="flex">${renderStars(product.rating)}</div>
                  <span class="text-xs font-bold text-slate-800">${product.rating} out of 5 stars</span>
                </div>
              </div>
              <button 
                onclick="window.toggleReviewForm()"
                class="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold transition-colors"
              >
                Write a Review
              </button>
            </div>

            <!-- Review submission form -->
            <form id="write-review-form" onsubmit="window.handleReviewSubmit(event, '${product.id}')" class="hidden bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 class="font-bold text-slate-900 text-sm">Write Your Review</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" name="reviewerName" required placeholder="Your Name" class="px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs">
                <select name="reviewerRating" class="px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold">
                  <option value="5">5 Stars (Excellent)</option>
                  <option value="4">4 Stars (Good)</option>
                  <option value="3">3 Stars (Average)</option>
                  <option value="2">2 Stars (Poor)</option>
                  <option value="1">1 Star (Terrible)</option>
                </select>
              </div>
              <input type="text" name="reviewTitle" required placeholder="Review Title / Headline" class="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs">
              <textarea name="reviewText" required rows="3" placeholder="Share your experience with this product..." class="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs"></textarea>
              <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-sm">Submit Review</button>
            </form>

            <!-- Reviews List -->
            <div class="space-y-4">
              ${(product.customerReviews || []).map(r => `
                <div class="p-4 rounded-2xl bg-white border border-slate-100 space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-xs sm:text-sm text-slate-900">${r.author}</span>
                      ${r.verified ? `<span class="badge-pill bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px]">Verified Buyer</span>` : ""}
                    </div>
                    <span class="text-[11px] text-slate-400">${r.date}</span>
                  </div>
                  <div class="flex items-center gap-1">${renderStars(r.rating)}</div>
                  <div class="font-semibold text-xs text-slate-800">${r.title}</div>
                  <p class="text-xs text-slate-600 leading-relaxed">${r.text}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>

      <!-- RELATED PRODUCTS SECTION -->
      <div class="pt-10 border-t border-slate-200">
        <div class="mb-6">
          <div class="text-xs uppercase font-extrabold text-indigo-600 tracking-wider">Recommendations</div>
          <h2 class="font-heading font-extrabold text-2xl text-slate-900 mt-1">Related Products</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${related.map(renderProductCard).join("")}
        </div>
      </div>

    </div>
  `;
}

// --- 4. CART FULL PAGE VIEW ---
function renderCartPage() {
  const store = window.novaStore;
  const items = store.getCartItems();
  const totals = store.getCartTotals();

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
      <div class="mb-8">
        <h1 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">Shopping Cart</h1>
        <p class="text-xs sm:text-sm text-slate-500 mt-1">Review your bag before checkout.</p>
      </div>

      ${items.length === 0 ? `
        <div class="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4 shadow-sm">
          <div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </div>
          <h3 class="font-heading font-bold text-slate-900 text-xl">Your Cart is Currently Empty</h3>
          <p class="text-xs text-slate-500">Looks like you haven't added anything yet. Explore our featured deals and curated collection.</p>
          <a href="#shop" class="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-bold shadow-md shadow-indigo-200 transition-all">
            Continue Shopping
          </a>
        </div>
      ` : `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left: Items Table / List (8 cols) -->
          <div class="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 class="font-heading font-bold text-slate-900 text-lg">Cart Items (${store.getCartCount()})</h3>
              <button onclick="window.novaStore.clearCart()" class="text-xs text-rose-600 hover:underline font-semibold">Clear Cart</button>
            </div>

            <!-- Items -->
            <div class="divide-y divide-slate-100">
              ${items.map(item => `
                <div class="py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div class="flex items-center gap-4">
                    <img 
                      src="${item.product.images[0]}" 
                      alt="${item.product.name}" 
                      class="w-20 h-20 rounded-2xl object-cover bg-slate-100 border border-slate-200 shrink-0 cursor-pointer"
                      onclick="window.router.navigate('product-details', { id: '${item.product.id}' })"
                    />
                    <div>
                      <span class="text-[11px] font-bold text-indigo-600 uppercase">${item.product.category}</span>
                      <h4 
                        onclick="window.router.navigate('product-details', { id: '${item.product.id}' })"
                        class="font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-indigo-600 cursor-pointer"
                      >
                        ${item.product.name}
                      </h4>
                      <div class="text-xs text-slate-500 mt-0.5">Color: <span class="font-semibold text-slate-700">${item.color}</span></div>
                      <div class="text-xs font-extrabold text-slate-900 sm:hidden mt-1">$${item.product.price.toFixed(2)}</div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between w-full sm:w-auto gap-6">
                    <!-- Quantity Stepper -->
                    <div class="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden shadow-xs">
                      <button 
                        onclick="window.novaStore.updateQuantity('${item.id}', -1, '${item.color}')"
                        class="px-2.5 py-1 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                      >−</button>
                      <span class="px-3 py-1 text-xs font-extrabold text-slate-900">${item.quantity}</span>
                      <button 
                        onclick="window.novaStore.updateQuantity('${item.id}', 1, '${item.color}')"
                        class="px-2.5 py-1 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                      >+</button>
                    </div>

                    <!-- Total Price -->
                    <div class="font-heading font-extrabold text-base text-slate-900 min-w-[70px] text-right">
                      $${item.totalPrice}
                    </div>

                    <!-- Remove / Wishlist -->
                    <div class="flex items-center gap-2">
                      <button 
                        onclick="window.novaStore.toggleWishlist('${item.id}')"
                        title="Move to Wishlist"
                        class="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                      >
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                      </button>
                      <button 
                        onclick="window.novaStore.removeFromCart('${item.id}', '${item.color}')"
                        title="Remove Item"
                        class="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                      >
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>

            <!-- Free Shipping Badge -->
            <div class="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100/80 flex items-center justify-between text-xs text-indigo-900">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
                <span>${totals.freeShipping ? 'Eligible for <strong>FREE Express Shipping</strong>!' : 'Orders over $50 receive complimentary Express Shipping.'}</span>
              </div>
              <a href="#shop" class="font-bold text-indigo-600 hover:underline">Add More Items</a>
            </div>

          </div>

          <!-- Right: Order Summary Sidebar (4 cols) -->
          <div class="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-6">
            <h3 class="font-heading font-bold text-slate-900 text-lg pb-4 border-b border-slate-100">Order Summary</h3>

            <!-- Promo Code Input -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Have a Promo Code?</label>
              ${totals.appliedCoupon ? `
                <div class="flex items-center justify-between p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs">
                  <div class="flex items-center gap-2 text-emerald-800 font-bold">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${totals.appliedCoupon.code} (${totals.appliedCoupon.description})</span>
                  </div>
                  <button onclick="window.novaStore.removeCoupon()" class="text-xs text-emerald-900 font-bold hover:underline">Remove</button>
                </div>
              ` : `
                <form onsubmit="window.handleCartCouponSubmit(event)" class="flex gap-2">
                  <input 
                    type="text" 
                    name="couponCode" 
                    placeholder="e.g. NOVA20" 
                    class="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs uppercase font-bold text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-500"
                  />
                  <button type="submit" class="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors">
                    Apply
                  </button>
                </form>
                <div class="text-[10px] text-slate-400 mt-1">Try using <strong class="text-indigo-600">NOVA20</strong> for 20% off.</div>
              `}
            </div>

            <!-- Price Breakdown -->
            <div class="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span class="font-bold text-slate-900">$${totals.subtotal}</span>
              </div>
              ${parseFloat(totals.discount) > 0 ? `
                <div class="flex justify-between text-emerald-600 font-bold">
                  <span>Promo Discount</span>
                  <span>-$${totals.discount}</span>
                </div>
              ` : ""}
              <div class="flex justify-between">
                <span>Estimated Shipping</span>
                <span>${totals.freeShipping ? '<strong class="text-emerald-600">FREE</strong>' : `$${totals.shipping}`}</span>
              </div>
              <div class="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span>$${totals.tax}</span>
              </div>
              <div class="flex justify-between items-baseline font-heading font-extrabold text-base text-slate-900 pt-3 border-t border-slate-200">
                <span>Grand Total</span>
                <span class="text-2xl text-indigo-600">$${totals.grandTotal}</span>
              </div>
            </div>

            <!-- Proceed to Checkout -->
            <a 
              href="#checkout" 
              class="w-full py-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-2xl font-bold text-sm text-center shadow-lg shadow-indigo-300/40 transition-all flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>

            <!-- Security Badges -->
            <div class="pt-2 text-center space-y-2">
              <div class="text-[11px] text-slate-400 font-medium">🔒 256-Bit SSL Encrypted & Protected Checkout</div>
            </div>

          </div>

        </div>
      `}
    </div>
  `;
}

// --- 5. CHECKOUT PAGE VIEW ---
function renderCheckoutPage() {
  const store = window.novaStore;
  const items = store.getCartItems();
  const totals = store.getCartTotals();

  if (items.length === 0) {
    return `
      <div class="max-w-2xl mx-auto px-4 py-20 text-center animate-fade-in space-y-4">
        <h2 class="font-heading font-bold text-2xl text-slate-900">Your bag is empty!</h2>
        <p class="text-xs text-slate-500">Please add items to your cart before proceeding to checkout.</p>
        <a href="#shop" class="inline-block px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">Browse Catalog</a>
      </div>
    `;
  }

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
      
      <div class="mb-8">
        <div class="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <a href="#home" class="hover:text-indigo-600">Home</a>
          <span>/</span>
          <a href="#cart" class="hover:text-indigo-600">Cart</a>
          <span>/</span>
          <span class="text-slate-800 font-bold">Secure Checkout</span>
        </div>
        <h1 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">Checkout</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Checkout Forms (8 cols) -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Autofill Demo Helper Button -->
          <div class="bg-indigo-50/80 p-4 rounded-2xl border border-indigo-200/80 flex items-center justify-between">
            <div class="text-xs text-indigo-900">
              <strong class="font-bold">Testing NovaCart?</strong> Click below to prefill realistic shipping data.
            </div>
            <button 
              type="button" 
              onclick="window.autofillCheckoutForm()"
              class="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
            >
              ⚡ Fill Demo Address
            </button>
          </div>

          <form id="checkout-form" onsubmit="window.handleOrderPlacement(event)" class="space-y-8">
            
            <!-- STEP 1: Customer Contact & Shipping Information -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
              <div class="flex items-center gap-3 pb-4 border-b border-slate-100">
                <span class="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                <h3 class="font-heading font-bold text-slate-900 text-lg">Shipping Address</h3>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input type="text" name="customerName" id="chk-name" required placeholder="Alex Morgan" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Phone *</label>
                  <input type="tel" name="customerPhone" id="chk-phone" required placeholder="+1 (555) 019-2834" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input type="email" name="customerEmail" id="chk-email" required placeholder="alex.morgan@example.com" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Street Address *</label>
                <input type="text" name="streetAddress" id="chk-street" required placeholder="742 Evergreen Terrace, Apt 4B" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">City *</label>
                  <input type="text" name="city" id="chk-city" required placeholder="San Francisco" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">State / Province *</label>
                  <input type="text" name="state" id="chk-state" required placeholder="California" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">PIN / ZIP Code *</label>
                  <input type="text" name="zipCode" id="chk-zip" required placeholder="94107" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
                </div>
              </div>
            </div>

            <!-- STEP 2: Delivery Speed Selection -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div class="flex items-center gap-3 pb-4 border-b border-slate-100">
                <span class="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                <h3 class="font-heading font-bold text-slate-900 text-lg">Delivery Method</h3>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label class="relative flex items-center p-4 border border-indigo-600 bg-indigo-50/40 rounded-2xl cursor-pointer">
                  <input type="radio" name="shippingMethod" value="standard" checked class="text-indigo-600">
                  <div class="ml-3">
                    <div class="font-bold text-xs sm:text-sm text-slate-900">Standard Delivery (3-5 days)</div>
                    <div class="text-[11px] text-slate-500">Included on all qualifying orders</div>
                  </div>
                  <span class="ml-auto font-extrabold text-xs text-emerald-600">FREE</span>
                </label>

                <label class="relative flex items-center p-4 border border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50">
                  <input type="radio" name="shippingMethod" value="express" class="text-indigo-600">
                  <div class="ml-3">
                    <div class="font-bold text-xs sm:text-sm text-slate-900">Priority Next-Day (1-2 days)</div>
                    <div class="text-[11px] text-slate-500">Air express with insurance</div>
                  </div>
                  <span class="ml-auto font-extrabold text-xs text-slate-900">+$9.99</span>
                </label>
              </div>
            </div>

            <!-- STEP 3: Payment Method Selection -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
              <div class="flex items-center gap-3 pb-4 border-b border-slate-100">
                <span class="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                <h3 class="font-heading font-bold text-slate-900 text-lg">Payment Method</h3>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button type="button" onclick="window.selectPaymentTab('card')" id="pay-btn-card" class="payment-tab p-3 rounded-2xl border-2 border-indigo-600 bg-indigo-50/50 text-indigo-700 font-bold text-xs flex flex-col items-center gap-1.5">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                  <span>Credit Card</span>
                </button>
                <button type="button" onclick="window.selectPaymentTab('upi')" id="pay-btn-upi" class="payment-tab p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex flex-col items-center gap-1.5">
                  <svg class="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>
                  <span>UPI / QR</span>
                </button>
                <button type="button" onclick="window.selectPaymentTab('netbanking')" id="pay-btn-netbanking" class="payment-tab p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex flex-col items-center gap-1.5">
                  <svg class="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 7 10-5 10 5"/><path d="M12 22V7"/><path d="M5 22V11"/><path d="M19 22V11"/></svg>
                  <span>Net Banking</span>
                </button>
                <button type="button" onclick="window.selectPaymentTab('cod')" id="pay-btn-cod" class="payment-tab p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex flex-col items-center gap-1.5">
                  <svg class="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                  <span>Pay on Delivery</span>
                </button>
              </div>

              <!-- Credit Card Fields Tab -->
              <div id="payment-fields-card" class="space-y-3 pt-2">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">Card Number</label>
                  <input type="text" id="chk-card-num" placeholder="4242 •••• •••• 4242" value="4242 8492 0184 9201" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Expiration</label>
                    <input type="text" id="chk-card-exp" placeholder="MM/YY" value="08/28" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">CVV / CVC</label>
                    <input type="password" id="chk-card-cvv" placeholder="•••" value="842" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-medium focus:bg-white focus:outline-none focus:border-indigo-500">
                  </div>
                </div>
              </div>

              <!-- UPI Fields Tab -->
              <div id="payment-fields-upi" class="hidden space-y-3 pt-2">
                <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 space-y-2">
                  <div class="font-bold">Scan QR or enter UPI ID</div>
                  <input type="text" placeholder="username@okhdfcbank" value="alex.morgan@upi" class="w-full px-3 py-2 bg-white rounded-xl border border-emerald-300 text-xs">
                  <p class="text-[10px] text-emerald-700">Approve payment on Google Pay, PhonePe, or Paytm once placed.</p>
                </div>
              </div>

              <!-- Net Banking Tab -->
              <div id="payment-fields-netbanking" class="hidden space-y-3 pt-2">
                <select class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium">
                  <option>Chase Bank</option>
                  <option>Bank of America</option>
                  <option>Wells Fargo</option>
                  <option>HDFC Bank</option>
                  <option>Citibank</option>
                </select>
              </div>

              <!-- Cash on Delivery Tab -->
              <div id="payment-fields-cod" class="hidden space-y-3 pt-2">
                <div class="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900">
                  💵 You can pay with Cash or Digital Card upon physical delivery to your doorstep.
                </div>
              </div>

            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              id="place-order-btn"
              class="w-full py-4 px-8 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-2xl font-bold text-base shadow-xl shadow-indigo-300/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              <span>Place Order (${formatPrice(totals.grandTotal)})</span>
            </button>

          </form>

        </div>

        <!-- Right: Sticky Order Summary (4 cols) -->
        <div class="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-6 sticky top-28">
          <h3 class="font-heading font-bold text-slate-900 text-lg pb-4 border-b border-slate-100">Order Items (${items.length})</h3>

          <!-- Items preview -->
          <div class="max-h-60 overflow-y-auto space-y-3 pr-1">
            ${items.map(item => `
              <div class="flex items-center gap-3">
                <img src="${item.product.images[0]}" alt="${item.product.name}" class="w-12 h-12 rounded-xl object-cover border border-slate-200">
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-xs text-slate-900 truncate">${item.product.name}</h4>
                  <div class="text-[11px] text-slate-500">Qty: ${item.quantity} • ${item.color}</div>
                </div>
                <span class="font-extrabold text-xs text-slate-900">$${item.totalPrice}</span>
              </div>
            `).join("")}
          </div>

          <!-- Total Calculation breakdown -->
          <div class="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span class="font-bold text-slate-900">$${totals.subtotal}</span>
            </div>
            ${parseFloat(totals.discount) > 0 ? `
              <div class="flex justify-between text-emerald-600 font-bold">
                <span>Discount</span>
                <span>-$${totals.discount}</span>
              </div>
            ` : ""}
            <div class="flex justify-between">
              <span>Shipping</span>
              <span>${totals.freeShipping ? '<strong class="text-emerald-600">FREE</strong>' : `$${totals.shipping}`}</span>
            </div>
            <div class="flex justify-between">
              <span>Tax (8%)</span>
              <span>$${totals.tax}</span>
            </div>
            <div class="flex justify-between items-baseline font-heading font-extrabold text-base text-slate-900 pt-3 border-t border-slate-200">
              <span>Total to Pay</span>
              <span class="text-2xl text-indigo-600">$${totals.grandTotal}</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

// --- 6. ORDER SUCCESS PAGE VIEW ---
function renderOrderSuccessPage(orderId) {
  const latestOrder = window.novaStore.loadFromStorage("novacart_latest_order", null);
  const order = latestOrder || {
    id: orderId || "NC-928174",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    estimatedDelivery: "Friday, Oct 3",
    totals: { grandTotal: "199.99", subtotal: "199.99", shipping: "0.00" },
    shippingData: { customerName: "Alex Morgan", streetAddress: "742 Evergreen Terrace", city: "San Francisco", state: "CA", zipCode: "94107" },
    paymentData: { method: "Credit Card (Ending in 4242)" },
    items: [
      { product: PRODUCTS[0], quantity: 1, color: "Space Black", totalPrice: "199.99" }
    ]
  };

  return `
    <div class="max-w-3xl mx-auto px-4 py-12 sm:py-16 animate-fade-in space-y-8">
      
      <!-- Top Success Card -->
      <div class="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl text-center space-y-4">
        
        <!-- Animated Green Checkmark -->
        <div class="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
        </div>

        <div class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
          Payment Confirmed
        </div>

        <h1 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
          Thank You For Your Order!
        </h1>

        <p class="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          Your order has been placed and is currently being processed by our fulfillment center. An email receipt has been sent to your address.
        </p>

        <!-- Order ID pill -->
        <div class="pt-2 flex items-center justify-center gap-3">
          <div class="px-4 py-2 bg-slate-100 rounded-xl font-mono font-bold text-slate-800 text-sm">
            Order Reference: <strong class="text-indigo-600">${order.id}</strong>
          </div>
        </div>

      </div>

      <!-- Order Tracker Progress -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <h3 class="font-heading font-bold text-slate-900 text-base">Tracking Status</h3>
        
        <div class="grid grid-cols-4 gap-2 text-center text-xs pt-2">
          <div class="space-y-1">
            <div class="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto">✓</div>
            <div class="font-bold text-slate-900">Confirmed</div>
            <div class="text-[10px] text-slate-400">Just Now</div>
          </div>
          <div class="space-y-1">
            <div class="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mx-auto animate-pulse">2</div>
            <div class="font-bold text-slate-900">Processing</div>
            <div class="text-[10px] text-indigo-600 font-semibold">Today</div>
          </div>
          <div class="space-y-1">
            <div class="w-7 h-7 rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center mx-auto">3</div>
            <div class="font-medium text-slate-500">Shipped</div>
            <div class="text-[10px] text-slate-400">In 24h</div>
          </div>
          <div class="space-y-1">
            <div class="w-7 h-7 rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center mx-auto">4</div>
            <div class="font-medium text-slate-500">Delivered</div>
            <div class="text-[10px] text-slate-400">${order.estimatedDelivery || "Oct 3"}</div>
          </div>
        </div>
      </div>

      <!-- Printable Order Invoice Receipt Card -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6 printable-receipt">
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <div class="font-heading font-bold text-slate-900 text-lg">Order Receipt Summary</div>
            <div class="text-xs text-slate-400">${order.date}</div>
          </div>
          <button 
            onclick="window.printInvoice()"
            class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 no-print"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
            Print / Save PDF
          </button>
        </div>

        <!-- Shipping & Payment Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
          <div class="p-4 bg-slate-50 rounded-2xl">
            <div class="font-bold text-slate-900 mb-1">Delivering to:</div>
            <div>${order.shippingData ? order.shippingData.customerName : "Alex Morgan"}</div>
            <div>${order.shippingData ? order.shippingData.streetAddress : "742 Evergreen Terrace"}</div>
            <div>${order.shippingData ? `${order.shippingData.city}, ${order.shippingData.state} ${order.shippingData.zipCode}` : "San Francisco, CA 94107"}</div>
          </div>
          <div class="p-4 bg-slate-50 rounded-2xl">
            <div class="font-bold text-slate-900 mb-1">Payment Method:</div>
            <div>${order.paymentData ? order.paymentData.method : "Credit Card (Ending in 4242)"}</div>
            <div class="text-emerald-600 font-bold mt-1">Status: Paid in Full</div>
          </div>
        </div>

        <!-- Items list -->
        <div class="space-y-3">
          ${(order.items || []).map(item => `
            <div class="flex items-center justify-between text-xs py-2 border-b border-slate-50">
              <div class="flex items-center gap-3">
                <img src="${(item.product && item.product.images && item.product.images[0]) || FALLBACK_IMG}" class="w-10 h-10 rounded-lg object-cover">
                <div>
                  <div class="font-bold text-slate-900">${item.product ? item.product.name : "Product"}</div>
                  <div class="text-slate-400">Qty: ${item.quantity} • ${item.color}</div>
                </div>
              </div>
              <div class="font-bold text-slate-900">$${item.totalPrice}</div>
            </div>
          `).join("")}
        </div>

        <!-- Totals summary -->
        <div class="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>$${order.totals ? order.totals.subtotal : "199.99"}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping</span>
            <span class="text-emerald-600 font-bold">FREE</span>
          </div>
          <div class="flex justify-between font-heading font-extrabold text-base text-slate-900 pt-2 border-t border-slate-200">
            <span>Grand Total</span>
            <span class="text-indigo-600 text-xl">$${order.totals ? order.totals.grandTotal : "199.99"}</span>
          </div>
        </div>

      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center no-print">
        <a 
          href="#shop" 
          class="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-md shadow-indigo-200 text-center transition-all"
        >
          Continue Shopping
        </a>
        <a 
          href="#home" 
          class="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-2xl text-xs sm:text-sm font-bold shadow-xs text-center transition-all"
        >
          Back to Homepage
        </a>
      </div>

    </div>
  `;
}

// --- 7. WISHLIST PAGE VIEW ---
function renderWishlistPage() {
  const store = window.novaStore;
  const items = store.getWishlistItems();

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
      <div class="mb-8">
        <h1 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">Your Saved Wishlist</h1>
        <p class="text-xs sm:text-sm text-slate-500 mt-1">${items.length} items saved for later purchase.</p>
      </div>

      ${items.length === 0 ? `
        <div class="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4 shadow-sm">
          <div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
          <h3 class="font-heading font-bold text-slate-900 text-xl">Your Wishlist is Empty</h3>
          <p class="text-xs text-slate-500">Tap the heart icon on any product card to save items to your wishlist for later.</p>
          <a href="#shop" class="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-bold shadow-md shadow-indigo-200 transition-all">
            Explore Products
          </a>
        </div>
      ` : `
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          ${items.map(product => `
            <div class="bg-white rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col justify-between p-4 shadow-xs hover:shadow-lg transition-all">
              <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 cursor-pointer" onclick="window.router.navigate('product-details', { id: '${product.id}' })">
                <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover">
                <button 
                  onclick="event.stopPropagation(); window.novaStore.toggleWishlist('${product.id}')"
                  class="absolute top-2 right-2 p-2 rounded-full bg-white/90 text-rose-500 hover:bg-white shadow-sm"
                  title="Remove from Wishlist"
                >
                  <svg class="w-4 h-4 fill-rose-500" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </button>
              </div>

              <div class="mt-3 space-y-1">
                <span class="text-[10px] uppercase font-bold text-indigo-600">${product.category}</span>
                <h4 
                  onclick="window.router.navigate('product-details', { id: '${product.id}' })"
                  class="font-heading font-bold text-sm text-slate-900 line-clamp-1 hover:text-indigo-600 cursor-pointer"
                >
                  ${product.name}
                </h4>
                <div class="flex items-baseline gap-2 pt-1">
                  <span class="font-extrabold text-base text-slate-900">$${product.price.toFixed(2)}</span>
                  ${product.originalPrice ? `<span class="text-xs text-slate-400 line-through">$${product.originalPrice.toFixed(2)}</span>` : ""}
                </div>
              </div>

              <button 
                onclick="window.novaStore.moveToCart('${product.id}')"
                class="mt-4 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                Move to Cart
              </button>
            </div>
          `).join("")}
        </div>
      `}
    </div>
  `;
}

// --- 8. DEALS & COUPONS PAGE VIEW ---
function renderDealsPage() {
  const saleProducts = PRODUCTS.filter(p => p.discount > 0);

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in space-y-12">
      
      <!-- Deals Banner -->
      <div class="rounded-3xl bg-gradient-to-r from-rose-950 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-rose-900/30">
        <div class="max-w-2xl space-y-4">
          <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-500/40">Exclusive Savings</span>
          <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">Hot Deals & Coupon Vault</h1>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Copy active promotional coupons below and apply them directly inside your shopping cart to unlock instant markdowns.
          </p>
        </div>
      </div>

      <!-- Coupon Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${Object.values(COUPONS).map(c => `
          <div class="bg-white rounded-2xl p-5 border-2 border-dashed border-indigo-200 hover:border-indigo-500 shadow-xs transition-all space-y-3">
            <div class="flex items-center justify-between">
              <span class="font-mono font-extrabold text-lg text-indigo-700 tracking-wider">${c.code}</span>
              <span class="badge-pill bg-indigo-50 text-indigo-700 font-bold">ACTIVE</span>
            </div>
            <p class="text-xs text-slate-600 font-medium">${c.description}</p>
            <button 
              onclick="window.novaStore.applyCoupon('${c.code}')"
              class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors"
            >
              Apply to Cart
            </button>
          </div>
        `).join("")}
      </div>

      <!-- Discounted Products Grid -->
      <div>
        <div class="mb-6">
          <h2 class="font-heading font-extrabold text-2xl text-slate-900">Discounted Inventory (${saleProducts.length} Items)</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          ${saleProducts.map(renderProductCard).join("")}
        </div>
      </div>

    </div>
  `;
}

// --- 9. ABOUT PAGE VIEW ---
function renderAboutPage() {
  return `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 animate-fade-in space-y-16">
      
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <span class="text-xs uppercase font-extrabold text-indigo-600 tracking-wider">Our Origin Story</span>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900">Crafting Modern Living with NovaCart</h1>
        <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Founded in 2026, NovaCart was created with one foundational premise: shopping online should be enjoyable, transparent, and refined.
        </p>
      </div>

      <div class="aspect-video rounded-3xl overflow-hidden bg-slate-100 shadow-xl border border-slate-200">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80" alt="NovaCart Studio Team" class="w-full h-full object-cover">
      </div>

      <!-- Core Pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto font-bold text-xl">1</div>
          <h3 class="font-heading font-bold text-slate-900 text-lg">Curated Excellence</h3>
          <p class="text-xs text-slate-500 leading-relaxed">Every item in our collection passes rigorous real-world durability and ergonomic performance tests before listing.</p>
        </div>

        <div class="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto font-bold text-xl">2</div>
          <h3 class="font-heading font-bold text-slate-900 text-lg">Direct Pricing</h3>
          <p class="text-xs text-slate-500 leading-relaxed">By partnering directly with artisan manufacturers and engineering laboratories, we remove legacy middlemen markups.</p>
        </div>

        <div class="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto font-bold text-xl">3</div>
          <h3 class="font-heading font-bold text-slate-900 text-lg">Customer Delight</h3>
          <p class="text-xs text-slate-500 leading-relaxed">From 30-day hassle-free returns to round-the-clock live concierge assistance, your happiness is our North Star.</p>
        </div>
      </div>

    </div>
  `;
}

// --- 10. CONTACT PAGE VIEW ---
function renderContactPage() {
  return `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 animate-fade-in space-y-16">
      
      <div class="text-center space-y-4 max-w-xl mx-auto">
        <span class="text-xs uppercase font-extrabold text-indigo-600 tracking-wider">Get In Touch</span>
        <h1 class="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900">We're Here to Help</h1>
        <p class="text-xs sm:text-sm text-slate-500">Have questions about an order, warranty, or custom business inquiry? Drop us a note.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Contact Form (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <form onsubmit="window.handleContactSubmit(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                <input type="text" name="contactName" required placeholder="Alex Morgan" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-indigo-500">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input type="email" name="contactEmail" required placeholder="alex@example.com" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-indigo-500">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Subject *</label>
              <input type="text" name="contactSubject" required placeholder="Order inquiry or product question..." class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-indigo-500">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Message *</label>
              <textarea name="contactMessage" required rows="4" placeholder="How can our concierge team assist you today?" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-indigo-500"></textarea>
            </div>

            <button 
              type="submit" 
              class="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-indigo-200 transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- FAQ & Direct Info (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <h3 class="font-heading font-bold text-slate-900 text-base">Frequently Asked Questions</h3>
            <div class="space-y-3">
              ${FAQS.map(faq => `
                <div class="p-3.5 bg-slate-50 rounded-2xl space-y-1">
                  <div class="font-bold text-xs text-slate-900">${faq.question}</div>
                  <div class="text-[11px] text-slate-500 leading-relaxed">${faq.answer}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}
