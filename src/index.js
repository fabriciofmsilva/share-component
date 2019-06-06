class ShareElement extends HTMLElement {
  connectedCallback () {
    this.textContent = ':wave:'
  }
}

export default ShareElement

if (!window.customElements.get('fm-share')) {
  window.ShareElement = ShareElement
  window.customElements.define('fm-share', ShareElement)
}
