/* Fetches data/site.json and hydrates contact info across all pages */
(function () {
  fetch('data/site.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      /* Email links + text */
      document.querySelectorAll('[data-site="email"]').forEach(function (el) {
        el.textContent = data.email;
        if (el.tagName === 'A') el.href = 'mailto:' + data.email;
      });
      document.querySelectorAll('[data-site-href="email"]').forEach(function (el) {
        el.href = 'mailto:' + data.email;
      });

      /* Payment badges */
      document.querySelectorAll('[data-site="venmo"]').forEach(function (el) {
        el.textContent = 'Venmo ' + data.venmo;
      });
      document.querySelectorAll('[data-site="cashapp"]').forEach(function (el) {
        el.textContent = 'Cash App ' + data.cashapp;
      });

      /* Order / Square URL */
      document.querySelectorAll('[data-site-href="order"]').forEach(function (el) {
        el.href = data.order_url;
      });

      /* Pickup location */
      document.querySelectorAll('[data-site="pickup"]').forEach(function (el) {
        el.textContent = data.pickup;
      });

      /* Disclosure text */
      document.querySelectorAll('[data-site="disclosure"]').forEach(function (el) {
        el.textContent = data.disclosure;
      });
    })
    .catch(function () { /* silently fall back to hardcoded HTML values */ });
})();
