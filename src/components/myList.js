class MyList extends HTMLElement{

    constructor(){
       
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }
    build(){
       const dado = document.createElement('div')
       dado.setAttribute('class', 'dado')

       const ul = document.createElement('ul')
       dado.appendChild(ul)
      
      
       const info = 
       [
        {nome: 'Home', link:'index.html'},
        {nome: 'Card', link:'card.html'},
       ]
       
       info.map(i=>
        
            ul.innerHTML += `
            <a href = ${i.link}>
                <li>${i.nome} </li>
            </a>    
                `
        )

        

          return dado
    }
    style(){
        const estilo = document.createElement('style')
        estilo.textContent =`
            .dado{ height: 100px; box-shadow: 1px 2px 5px #ccc; }
            .dado span{display: block; width: 350px; height: 35px; border: 1px solid;}
            .dado ul li{display: inline; padding: 1em;}
            .dado a{text-decoration: none; color: #53038c; font-weight: bold; font-size: 18pt;}
            .dado img{width: 132px}
        `
        return estilo
    }
}
customElements.define('my-list', MyList )