class Newsletter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = 
      {
        title: "let's keep in touch",
        description: "Get recommendations, tips, updates, and more.",
        form: {
          placeholder: "Enter your email address",
          buttonText: "Subscribe"
        }
      }
    ;
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      
      img{
        max-width: 100%;
        object-fit: cover;
      }

      button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6, span, li, label, a{ 
        margin: 0;
        font-family: "Inter", serif;
        text-transform: capitalize;
      }

      a{
        text-decoration: none;
        color: inherit;
      }
      .newsletter{
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      .newsletter-description p{
        color: hsl(0, 0%, 40%);
      }

      .form-element{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .form-element-input{
        width: max-content;
      }

      .form-element-input input{
        padding: 1rem;
        border: 1px solid hsl(0, 0%, 80%);
        border-radius: 1.5rem;
      }

      .form-element-input input::placeholder{
        font-weight: 700;
        text-align: center;
      }

      .form-element-button button{
        background-color: hsl(275, 53%, 45%); 
        border-radius: 1.5rem;
        color: hsl(0, 0%, 100%);
        font-weight: 700;
        padding: 1rem;
      }

    </style>

<div class="footer-column">
      <section class="newsletter">
        <div class="newsletter-title">
          <h2>${this.data.title}</h2>
        </div>
        <div class="newsletter-description">
          <p>${this.data.description}</p>
        </div>
        <div class="newsletter-form">
          <form id="newsletterForm">
            <div class="form-element">
              <div class="form-element-input">
                <input type="email" 
                    placeholder="${this.data.form.placeholder}" 
                    class="email-input" 
                    name="email" 
                    required>
              </div>
              <div class="form-element-button">
                <button type="submit" class="subscribe-btn">
                  ${this.data.form.buttonText}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
    `;
  }
}
  
customElements.define('newsletter-component', Newsletter);