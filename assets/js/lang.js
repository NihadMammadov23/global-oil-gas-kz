(function () {
  // 'az' temporarily disabled in the switcher — kept for future use.
  // Full list was: ['az', 'en', 'ru', 'kk']
  var LANGS = ['en', 'ru', 'kk'];
  var DEFAULT = 'en';
  var LANG_META = {
    // az: { code: 'az', name: 'AZ' }, // disabled — kept for future use
    en: { code: 'gb', name: 'EN' },
    ru: { code: 'ru', name: 'RU' },
    kk: { code: 'kz', name: 'KK' }
  };

  function getLang() {
    var stored = localStorage.getItem('sam-lang');
    // Guard against a stale/disabled value (e.g. 'az' saved before it was
    // removed from the switcher) silently overriding the current default.
    if (stored && LANGS.indexOf(stored) === -1) {
      localStorage.removeItem('sam-lang');
      stored = null;
    }
    return stored || DEFAULT;
  }

  function applyLang(lang) {
    var t = (window.translations && window.translations[lang]) || {};

    document.documentElement.lang = lang === 'ru' ? 'ru' : lang === 'kk' ? 'kk' : lang === 'az' ? 'az' : 'en';

    // text content nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-orig')) {
        el.setAttribute('data-i18n-orig', el.textContent.trim());
      }
      var key = el.getAttribute('data-i18n');
      if (lang === 'az') {
        el.textContent = el.getAttribute('data-i18n-orig');
      } else if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // html content nodes (for elements with inner tags like span/br)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-orig-html')) {
        el.setAttribute('data-i18n-orig-html', el.innerHTML);
      }
      var key = el.getAttribute('data-i18n-html');
      if (lang === 'az') {
        el.innerHTML = el.getAttribute('data-i18n-orig-html');
      } else if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-orig-ph')) {
        el.setAttribute('data-i18n-orig-ph', el.placeholder);
      }
      var key = el.getAttribute('data-i18n-placeholder');
      if (lang === 'az') {
        el.placeholder = el.getAttribute('data-i18n-orig-ph');
      } else if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update selected button display
    var meta = LANG_META[lang];
    if (meta) {
      var flagEl = document.querySelector('.lang-selected .lang-flag');
      var nameEl = document.querySelector('.lang-selected .lang-name');
      if (flagEl) flagEl.className = 'fi fi-' + meta.code + ' lang-flag';
      if (nameEl) nameEl.textContent = meta.name;
    }

    // Highlight active option
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    localStorage.setItem('sam-lang', lang);
    applyLang(lang);
  }

  function closeLangDropdown() {
    var dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) dropdown.classList.remove('open');
  }

  window.setLang = setLang;
  window.getLang = getLang;

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
        closeLangDropdown();
      });
    });

    var trigger = document.querySelector('.lang-selected');
    if (trigger) {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var dropdown = document.querySelector('.lang-dropdown');
        if (dropdown) dropdown.classList.toggle('open');
      });
    }

    document.addEventListener('click', function () {
      closeLangDropdown();
    });
  });
})();
