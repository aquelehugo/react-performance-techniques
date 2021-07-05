import { hydrate } from 'react-dom'

const hydrateOnFocus = (jsx, rootDiv) => {
  const triggerElements = rootDiv.querySelectorAll('[data-hydrateonfocus]')

  const focusListener = () => {
    triggerElements.forEach(triggerElement => triggerElement.removeEventListener('focusin', focusListener))
    hydrate(jsx, rootDiv)
  }

  triggerElements.forEach(triggerElement => triggerElement.addEventListener('focusin', focusListener))
}

export default hydrateOnFocus
