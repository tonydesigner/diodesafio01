class CardNews extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
      
    }
    build(){
            const container = document.createElement("div")
            container.setAttribute('class', 'container')

            const card_left = document.createElement('div')
            container.appendChild(card_left)
            card_left.setAttribute('class', 'card_left')
            
            const autor = document.createElement('span')
            card_left.appendChild(autor)
            autor.textContent = 'Por: ' + (this.getAttribute('autor') || 'Autor Desconhecido') 

            const link = document.createElement('a')
            card_left.appendChild(link)
            link.href = this.getAttribute('link')
            
            const titulo = document.createElement('h1')
            card_left.appendChild(titulo)
            link.appendChild(titulo)
            titulo.textContent = this.getAttribute('titulo')

            const news = document.createElement('p')
            card_left.appendChild(news)
            news.textContent = this.getAttribute('twit')

            const card_right = document.createElement('div')
            container.appendChild(card_right)
            card_right.setAttribute('class', 'car_right')
            const img = document.createElement('img')
            card_right.appendChild(img)
            img.src = this.getAttribute('image') || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMT6kuEjCVGQmABoZtE-s1X_Eo5EcAH277BxLriNjnQ&s'

            return container
           
    }
    styles(){
        const estilo = document.createElement('style')
            estilo.textContent = `
                *{font-family:'Segoe UI', sans-serif; margin: 0; padding: 0; box-sizing: "border-box";}
                .topo{height: 150px; background-color:green;}
                a{text-decoration: none;}
                .container{animation: anime 1s ease; border-radius: 1em; margin: 2em 1em; width: 720px; height: 150px; box-shadow: 0 0 15px #ccc; padding: 1em; display: flex; flex-direction: row; align-items: center;gap: 2em; justify-content: space-around}
                .card_left{width: 70%; gap: 1em; display:flex; flex-direction: column; justfy-content: center; padding: 1em;} 
                .card_left span { font-weight: bold;}
                .card_left a{color: #000;}
                .card_left h2{font-size: 28pt;}
                .card_left p{color:#a1a1a1;}
                .car_right{width: 30%; height: 150px;}
                .car_right img{animation: aparece 1.5s ease; width: 150px; border: 1px solid;}  
                
                @keyframes anime{
                    0%{transform: translateX(-150px); opacity: 0;}
                    100%{transform: translateX(0); opacity: 1;}
                }
                @keyframes aparece{
                    0%{transform: scale(0); opacity: 0;}
                    100%{transform:  scale(1); opacity: 1;}
                }
            `
        return estilo
        
    }

}

customElements.define('card-news', CardNews)