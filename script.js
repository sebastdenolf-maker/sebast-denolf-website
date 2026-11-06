document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });
document.querySelectorAll('[data-video]').forEach(container => {
  container.querySelector('button').addEventListener('click', () => {
    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${container.dataset.video}?autoplay=1`;
    player.title = container.dataset.title;
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.allowFullscreen = true;
    container.replaceChildren(player);
    player.focus();
  });
});

// Keep motion limited to the large headings. Text and navigation stay immediate.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const headings = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        headings.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('main h2').forEach(heading => {
    heading.classList.add('heading-reveal');
    headings.observe(heading);
  });
}
