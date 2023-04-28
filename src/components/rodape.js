class Rodape extends HTMLElement{

    constructor(){
       
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
        
    }
    build(){
        const rodape = document.createElement('div')
        rodape.setAttribute('class', 'rodape')

        const links = document.createElement('div')
        links.setAttribute('class','box')
        rodape.appendChild(links)
        links.textContent = this.getAttribute('eu')

        
        const acessos = document.createElement('div')
        acessos.setAttribute('class','box')
        rodape.appendChild(acessos)
        acessos.textContent = this.getAttribute('link')

        const image = document.createElement('img')
        image.src = this.getAttribute('image')
        acessos.appendChild(image)

       

        return rodape
    }
    style(){
        const estilo = document.createElement('style')
        estilo.textContent = `
            .rodape{ display: flex; flex-direction: row; justify-content: center; height: 200px; background-color: black; color: #fff;padding: 1em;}
            .box{width: 350px; height: 100%; text-align: center;}
            `
        return estilo
    }
    
}
customElements.define('my-rodape',Rodape)