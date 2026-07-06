const categories = ['semua', 'smartphones', 'laptops', 'audio', 'wearables', 'gaming'];
const categoryLabels = {
  semua: 'Semua',
  smartphones: 'Smartphones',
  laptops: 'Laptops',
  audio: 'Audio',
  wearables: 'Wearables',
  gaming: 'Gaming'
};

// State filter aktif
let activeCategory = 'semua';
let activeSort = 'newest';
let searchQuery = '';

// Badge color mapping
function getBadgeClass(badge) {
  const map = {
    'Best Seller': 'badge--accent',
    'New': 'badge--new',
    'Premium': 'badge--premium',
    'Gaming': 'badge--gaming',
    'Value': 'badge--value',
    'Popular': 'badge--popular'
  };
  return map[badge] || 'badge--accent';
}

// Render satu product card
function renderProductCard(product, index) {
  const discount = getDiscount(product.originalPrice, product.price);
  const badgeHtml = product.badge
    ? `<span class="badge ${getBadgeClass(product.badge)}">${product.badge}</span>`
    : '';
  const discountHtml = discount > 0
    ? `<span class="badge badge--discount">-${discount}%</span>`
    : '';
  const originalPriceHtml = product.originalPrice
    ? `<span class="product-card__price-original">${formatPrice(product.originalPrice)}</span>`
    : '';

  return `
    <article class="product-card" style="animation-delay: ${index * 0.06}s" onclick="window.location.href='detail.html?id=${product.id}'">
      <div class="product-card__img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-card__badges">
          ${badgeHtml}
          ${discountHtml}
        </div>
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${categoryLabels[product.category] || product.category}</div>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__rating">
          <div class="stars">${renderStars(product.rating)}</div>
          <span class="reviews-count">(${product.reviews})</span>
        </div>
        <div class="product-card__price">
          <span class="product-card__price-current">${formatPrice(product.price)}</span>
          ${originalPriceHtml}
        </div>
        <button class="product-card__add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
          <i class="fas fa-shopping-bag"></i> Tambah ke Keranjang
        </button>
      </div>
    </article>
  `;
}

// Filter dan sort produk
function getFilteredProducts() {
  let filtered = [...products];

  // Filter kategori
  if (activeCategory !== 'semua') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  // Filter search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (activeSort) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
    default:
      // Urutan default dari data.js
      break;
  }

  return filtered;
}

// Render semua produk ke grid
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;

  const filtered = getFilteredProducts();

  if (countEl) {
    countEl.innerHTML = `Menampilkan <span>${filtered.length}</span> produk`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>Produk tidak ditemukan</h3>
        <p>Coba ubah filter atau kata kunci pencarian kamu.</p>
        <button class="btn btn--outline" onclick="resetFilters()">Reset Filter</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => renderProductCard(p, i)).join('');
}

// Render filter chips
function renderFilterChips() {
  const container = document.getElementById('filterChips');
  if (!container) return;

  container.innerHTML = categories.map(cat => `
    <button class="filter-chip ${cat === activeCategory ? 'active' : ''}"
            data-category="${cat}">
      ${categoryLabels[cat]}
    </button>
  `).join('');

  // Event listener untuk chips
  container.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      activeCategory = chip.dataset.category;
      renderFilterChips();
      renderProducts();
      updateActiveNavLink();
    });
  });
}

// Reset semua filter
function resetFilters() {
  activeCategory = 'semua';
  activeSort = 'newest';
  searchQuery = '';

  const searchInput = document.getElementById('heroSearch');
  const sortSelect = document.getElementById('sortSelect');
  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'newest';

  renderFilterChips();
  renderProducts();
  updateActiveNavLink();
}

// Update active state di navbar berdasarkan kategori
function updateActiveNavLink() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (activeCategory === 'semua' && href === 'index.html') {
      link.classList.add('active');
    } else if (href === `index.html?category=${activeCategory}`) {
      link.classList.add('active');
    }
  });
}

// Inisialisasi halaman produk
document.addEventListener('DOMContentLoaded', () => {
  // Cek URL param untuk kategori
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('category');
  if (urlCategory && categories.includes(urlCategory)) {
    activeCategory = urlCategory;
  }

  renderFilterChips();
  renderProducts();
  updateActiveNavLink();

  // Search input
  const searchInput = document.getElementById('heroSearch');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        renderProducts();
      }, 300);
    });
  }

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderProducts();
    });
  }
});