(function () {
  var preview;
  var hideTimer;

  function ensurePreview() {
    if (preview) return preview;
    preview = document.createElement('div');
    preview.className = 'wikilink-preview';
    preview.innerHTML =
      '<div class="preview-title"></div>' +
      '<div class="preview-excerpt"></div>' +
      '<div class="preview-meta"></div>';
    document.body.appendChild(preview);
    return preview;
  }

  function showPreview(link) {
    clearTimeout(hideTimer);
    var p = ensurePreview();
    p.querySelector('.preview-title').textContent = link.dataset.previewTitle || link.textContent;
    p.querySelector('.preview-excerpt').textContent = link.dataset.previewExcerpt || '';
    p.querySelector('.preview-meta').textContent = link.dataset.previewMeta || '';

    var rect = link.getBoundingClientRect();
    var top = window.scrollY + rect.bottom + 8;
    var left = window.scrollX + rect.left;
    var maxLeft = window.scrollX + window.innerWidth - 380;
    if (left > maxLeft) left = maxLeft;
    p.style.top = top + 'px';
    p.style.left = left + 'px';
    p.classList.add('is-visible');
  }

  function hidePreview() {
    if (!preview) return;
    hideTimer = setTimeout(function () {
      preview.classList.remove('is-visible');
    }, 150);
  }

  document.addEventListener('mouseover', function (e) {
    var link = e.target.closest('.wikilink[data-preview-title]');
    if (link) showPreview(link);
  });
  document.addEventListener('mouseout', function (e) {
    var link = e.target.closest('.wikilink[data-preview-title]');
    if (link) hidePreview();
  });

  document.addEventListener('focusin', function (e) {
    var link = e.target.closest && e.target.closest('.wikilink[data-preview-title]');
    if (link) showPreview(link);
  });
  document.addEventListener('focusout', function (e) {
    var link = e.target.closest && e.target.closest('.wikilink[data-preview-title]');
    if (link) hidePreview();
  });
})();
