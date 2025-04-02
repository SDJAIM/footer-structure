class NavColumn extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = [
      {
        title: "get to know us",
        items: [
          { text: "about us", url: "#" },
          { text: "news & blog", url: "#" },
          { text: "careers", url: "#" },
          { text: "investors", url: "#" },
          { text: "contact us", url: "#" }
        ]
      },
      {
        title: "customer service",
        items: [
          { text: "help center", url: "#" },
          { text: "FAQ's", url: "#" },
          { text: "accessibility", url: "#" },
          { text: "feedback", url: "#" },
          { text: "size guide", url: "#" },
          { text: "payment method", url: "#" }
        ]
      },
      {
        title: "order & returns",
        items: [
          { text: "track order", url: "#" },
          { text: "shipping & delivery", url: "#" },
          { text: "return & exchange", url: "#" },
          { text: "price match guarantee", url: "#" }
        ]
      },
      {
        title: "legal",
        items: [
          { text: "privacy policy", url: "#" },
          { text: "terms of use", url: "#" },
          { text: "legal", url: "#" },
          { text: "site map", url: "#" }
        ]
      }
    ];
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      
        ul{ 
          list-style: none; 
          padding: 0; 
          margin: 0; 
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

        footer{
          display: grid;
          gap: 1rem;
          grid-template-columns: 2fr 1fr;
        }

        .footer-column{
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        nav{
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(4, 1fr);
        }

        .nav-column{
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .nav-list ul{
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .nav-list ul li {
          font-size: 1rem;
          color: hsl(0, 0%, 20%);
        }


    </style>
    
    <nav></nav> 
  `
      const nav = this.shadow.querySelector('nav');

      this.data.forEach(column => {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('nav-column');
        nav.appendChild(columnDiv);
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'nav-title';
        const h2 = document.createElement('h2');
        h2.textContent = column.title;
        titleDiv.appendChild(h2);
        columnDiv.append(titleDiv);

        const listDiv = document.createElement('div');
        listDiv.className = 'nav-list';
        columnDiv.append(listDiv);

        const ul = document.createElement('ul');
        listDiv.appendChild(ul);
        
        column.items.forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = item.url;
          a.textContent = item.text;
          li.appendChild(a);
          ul.appendChild(li);
        });
        
      });
  }
}
  
  customElements.define('nav-column-component', NavColumn);
