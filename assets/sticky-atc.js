(function () {
  function initStickyAtc(root) {
    if (!root || root.dataset.stickyAtcReady) return;
    root.dataset.stickyAtcReady = 'true';

    var formId = root.querySelector('[data-sticky-atc-submit]');
    if (!formId) return;
    var formSelector = formId.getAttribute('data-sticky-atc-form');
    var form = formSelector ? document.getElementById(formSelector) : null;
    var primaryBtn = form
      ? form.querySelector('[data-add-to-cart]')
      : document.querySelector('[data-add-to-cart]');
    if (!primaryBtn) return;

    var stickyText = root.querySelector('[data-sticky-atc-text]');
    var stickyPrice = root.querySelector('[data-sticky-atc-price]');
    var stickySubmit = root.querySelector('[data-sticky-atc-submit]');

    function syncFromPrimary() {
      if (stickyText && primaryBtn) {
        var src = primaryBtn.querySelector('[data-add-to-cart-text]');
        stickyText.textContent = src ? src.textContent.trim() : primaryBtn.textContent.trim();
      }
      if (stickySubmit) {
        stickySubmit.disabled = primaryBtn.disabled;
      }
      if (stickyPrice) {
        var priceEl =
          document.querySelector('[data-product-price]') ||
          document.querySelector('.product__price');
        if (priceEl) stickyPrice.textContent = priceEl.textContent.trim();
      }
    }

    function setVisible(on) {
      root.hidden = !on;
      root.setAttribute('aria-hidden', on ? 'false' : 'true');
      root.classList.toggle('is-visible', on);
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            setVisible(!entry.isIntersecting);
          });
        },
        { root: null, threshold: 0, rootMargin: '0px 0px -8% 0px' }
      );
      observer.observe(primaryBtn);
    }

    stickySubmit.addEventListener('click', function () {
      if (primaryBtn.disabled) return;
      primaryBtn.click();
    });

    syncFromPrimary();
    document.addEventListener('variant:change', syncFromPrimary);
    // Impulse theme updates ATC text in place — observe mutations lightly
    var mo = new MutationObserver(syncFromPrimary);
    mo.observe(primaryBtn, { attributes: true, childList: true, subtree: true, characterData: true });
  }

  function boot() {
    document.querySelectorAll('[data-sticky-atc]').forEach(initStickyAtc);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  document.addEventListener('shopify:section:load', boot);
})();
