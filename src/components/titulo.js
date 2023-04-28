class Titulo extends HTMLElement{

    constructor(){
       
        super()
        const shadow = this.attachShadow({mode: 'open'})

        const nome = document.createElement('h1')
        nome.innerText = 'Meu título'
        const style = document.createElement('style')
        style.textContent =`
        h1{color: red;margin: 0 auto; width: 750px; display: block; text-align: center; border: 1px solid;}
        `
        shadow.appendChild(nome)
        shadow.appendChild(style)
    }
}
customElements.define('card-titulo',Titulo)