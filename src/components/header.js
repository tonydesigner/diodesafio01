class Header extends HTMLElement{
    constructor(){
      
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())

       
    }   
    build(){
        const topo = document.createElement('div')
        topo.setAttribute('class', 'topo')
        

        const image = document.createElement('img')
        topo.appendChild(image)
        image.src = this.getAttribute('image')

        return topo
    }
    style(){
        const estilo = document.createElement('style')
        estilo.textContent = `
            .topo{height: 150px; background-color:#000;color: #fff; padding: 1em;}
            .topo img{width: 150px;}
        `
        return estilo
    }

    
}
customElements.define('card-header', Header)