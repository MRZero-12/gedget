let detailQty = 1;

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = products.find(p => p.id === productId);

  if (!product) {
    renderNotFound();
    return;
  }

  renderDetail(product);
  renderRelatedProducts(product);
  updateCartBadge();
});

function renderNotFound() {
  const main = document.querySelector('main .container');
  if (!main) return;
  main.innerHTML = `
    <div class="empty-cart" style="padding-top: 120px;">
      <div class="empty-cart__icon"><i class="fas fa-box-open"></i></div>
      <h2>Produk Tidak Ditemukan</h2>
      <p>Produk yang kamu cari tidak tersedia atau sudah dihapus.</p>
      <a href="index.html" class="btn btn--primary">Kembali ke Beranda</a>
    </div>
  `;
}

function renderDetail(product) {
  // Breadcrumb
  const breadcrumb = document.getElementById('detailBreadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span class="separator"><i class="fas fa-chevron-right"></i></span>
      <a href="index.html?category=${product.category}">${capitalize(product.category)}</a>
      <span class="separator"><i class="fas fa-chevron-right"></i></span>
      <span class="current">${product.name}</span>
    `;
  }

  // Gallery
  const galleryMain = document.getElementById('galleryMain');
  const galleryThumbs = document.getElementById('galleryThumbs');
  if (galleryMain) {
    galleryMain.innerHTML = `<img src="${product.images[0]}" alt="${product.name}" id="mainImage">`;
  }
  if (galleryThumbs) {
    galleryThumbs.innerHTML = product.images.map((img, i) => `
      <div class="detail-gallery__thumb ${i === 0 ? 'active' : ''}" onclick="switchImage('${img}', this)">
        <img src="${img}" alt="${product.name} ${i + 1}">
      </div>
    `).join('');
  }

  // Info
  const info = document.getElementById('detailInfo');
  if (!info) return;

  const discount = getDiscount(product.originalPrice, product.price);
  const badgeHtml = product.badge
    ? `<span class="badge ${getBadgeClass(product.badge)}">${product.badge}</span>`
    : '';
  const discountBadge = discount > 0
    ? `<span class="badge badge--discount">Hemat ${discount}%</span>`
    : '';
  const originalPriceHtml = product.originalPrice
    ? `<span class="detail-info__price-original">${formatPrice(product.originalPrice)}</span>`
    : '';
  const discountPriceHtml = discount > 0
    ? `<span class="detail-info__price-discount">-${formatPrice(product.originalPrice - product.price)}</span>`
    : '';

  const stockClass = product.stock <= 10 ? 'low-stock' : 'in-stock';
  const stockText = product.stock <= 10
    ? `Sisa ${product.stock} unit`
    : 'Stok tersedia';

  // Specs table
  const specsHtml = Object.entries(product.specs).map(([key, val]) => `
    <tr><td>${key}</td><td>${val}</td></tr>
  `).join('');

  info.innerHTML = `
    <div class="detail-info__badges">
      ${badgeHtml}
      ${discountBadge}
    </div>
    <h1 class="detail-info__name">${product.name}</h1>
    <div class="detail-info__rating">
      <div class="stars">${renderStars(product.rating)}</div>
      <span>${product.rating} (${product.reviews} ulasan)</span>
    </div>
    <div class="detail-info__price">
      <span class="detail-info__price-current">${formatPrice(product.price)}</span>
      ${originalPriceHtml}
      ${discountPriceHtml}
    </div>
    <p class="detail-info__desc">${product.description}</p>
    <div class="detail-info__stock ${stockClass}">
      <span class="dot"></span>
      ${stockText}
    </div>
    <div class="detail-actions">
      <div class="qty-control">
        <button onclick="changeDetailQty(-1, ${product.stock})" id="qtyMinus">-</button>
        <span id="qtyValue">1</span>
        <button onclick="changeDetailQty(1, ${product.stock})" id="qtyPlus">+</button>
      </div>
      <button class="btn btn--primary btn--lg" onclick="addToCart(${product.id}, detailQty)">
        <i class="fas fa-shopping-bag"></i> Tambah ke Keranjang
      </button>
    </div>
    <div class="detail-specs">
      <h3>Spesifikasi</h3>
      <div class="specs-collapse" id="specsCollapse">
        <table class="specs-table">
          ${specsHtml}
        </table>
        <div class="specs-fade"></div>
      </div>
      <button class="specs-toggle" id="specsToggle" onclick="toggleSpecs()">
        Selengkapnya <i class="fas fa-chevron-down"></i>
      </button>
    </div>
  `;

  // Update page title
  document.title = `${product.name} — GadgetZone`;

  
  requestAnimationFrame(() => {
    const collapseEl = document.getElementById('specsCollapse');
    const toggleBtn = document.getElementById('specsToggle');
    if (!collapseEl || !toggleBtn) return;
    const table = collapseEl.querySelector('.specs-table');
    if (table && table.scrollHeight <= collapseEl.clientHeight) {
      toggleBtn.style.display = 'none';
      collapseEl.classList.add('is-expanded');
    }
  });
}

function toggleSpecs() {
  const collapseEl = document.getElementById('specsCollapse');
  const toggleBtn = document.getElementById('specsToggle');
  if (!collapseEl || !toggleBtn) return;

  const isExpanded = collapseEl.classList.toggle('is-expanded');
  toggleBtn.innerHTML = isExpanded
    ? 'Sembunyikan <i class="fas fa-chevron-up"></i>'
    : 'Selengkapnya <i class="fas fa-chevron-down"></i>';
}

function switchImage(src, thumbEl) {
  const mainImg = document.getElementById('mainImage');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.detail-gallery__thumb').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function changeDetailQty(delta, maxStock) {
  detailQty = Math.max(1, Math.min(detailQty + delta, maxStock));
  const qtyValue = document.getElementById('qtyValue');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  if (qtyValue) qtyValue.textContent = detailQty;
  if (qtyMinus) qtyMinus.disabled = detailQty <= 1;
  if (qtyPlus) qtyPlus.disabled = detailQty >= maxStock;
}

function renderRelatedProducts(product) {
  const container = document.getElementById('relatedGrid');
  if (!container) return;

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  if (related.length === 0) {
    const section = container.closest('.related-products');
    if (section) section.style.display = 'none';
    return;
  }

  container.innerHTML = related.map((p, i) => renderProductCard(p, i)).join('');
}

// Helper
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


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