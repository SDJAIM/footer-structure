class Footer extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.render()
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>
      *{
        box-sizing: border-box;
      }

      footer{
        display: grid;
        grid-template-columns: 4fr 2fr;
      }
    </style>

    <footer>
      <div class="footer-column">
        <slot name="footer-column-left"></slot>
      </div>
      <div class="footer-column">
        <slot name="footer-column-right"></slot>
      </div>
    </footer>
    `
  }
}

customElements.define('footer-component', Footer)