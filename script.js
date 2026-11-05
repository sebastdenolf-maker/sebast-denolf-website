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
