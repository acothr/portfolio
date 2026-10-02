import './style.css'

document.querySelectorAll('.project-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const project = button.closest('.project-stage')
    const expanded = button.getAttribute('aria-expanded') === 'true'

    button.setAttribute('aria-expanded', String(!expanded))
    project.classList.toggle('is-expanded', !expanded)

    button.innerHTML = !expanded
      ? 'Show less <span aria-hidden="true">→</span>'
      : 'Read more <span aria-hidden="true">→</span>'
  })
})