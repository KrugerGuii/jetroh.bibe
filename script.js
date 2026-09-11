const level = document.querySelector('#bible-level')
const levelMessage = document.querySelector('.level-message')
const messages = [
  'Ainda estou conhecendo a Bíblia.',
  'Já conheço a Bíblia e quero me aprofundar mais.',
  'Quero estudar com profundidade, contexto e textos originais.'
]
if (level && levelMessage) {
  const updateLevelMessage = () => {
    const value = Number(level.value)
    const messageIndex = value < 34 ? 0 : value < 67 ? 1 : 2
    levelMessage.textContent = messages[messageIndex]
  }

  level.addEventListener('input', updateLevelMessage)
  updateLevelMessage()
}

const revealItems = document.querySelectorAll(
  '.feature-row, .ai-row, .editorial-row, .faq-section > h2, .faq-list, .download-wrap, .footer-art, .footer-brand, .footer > p, .store-buttons'
)

revealItems.forEach((item) => item.classList.add('reveal-on-scroll'))

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -6% 0px'
  })

  revealItems.forEach((item) => revealObserver.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'))
}

const menuButton = document.querySelector('.menu-button')
const menuPanel = document.querySelector('.menu-panel')
if (menuButton && menuPanel) {
  menuButton.addEventListener('click', () => {
    const open = menuPanel.classList.toggle('open')
    menuButton.setAttribute('aria-expanded', String(open))
  })
  menuPanel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuPanel.classList.remove('open')
    menuButton.setAttribute('aria-expanded', 'false')
  }))
}

document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return
    document.querySelectorAll('.faq-list details').forEach((other) => {
      if (other !== item) other.open = false
    })
  })
})

const toTop = document.querySelector('.to-top')
if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
