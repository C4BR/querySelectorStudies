const roomsList = {
    1: {
        name: "Suíte Dupla",
        description: [
            "🛌 Cama Confortável: Simplicidade e descanso.",
            "🚿 Chuveiro Relaxante: Energize seu dia.",
            "🪟 Janela com Vista: Iluminação natural acolhedora.",
            "☕ Cafeteira: Seu café sempre à mão.",
            "📺 TV a Cabo: Entretenimento essencial.",
            "🌐 Wi-Fi Gratuito: Sempre conectado.",
            "❄️ Ar-Condicionado: Conforto em qualquer estação."
        ],
        logo: "1.jpg"
    },
    2: {
        name: "Quarto Deluxe",
        description: [
            "🛌 Cama Queen Size: Um toque de luxo.",
            "🛋️ Área de Estar: Para relaxar com estilo.",
            "🏞️ Vista Panorâmica: Cenário encantador.",
            "☕ Máquina de Espresso: Para amantes de café.",
            "📺 Smart TV: Entretenimento de última geração.",
            "🌐 Wi-Fi Premium: Navegação veloz.",
            "🌡️ Climatização Inteligente: Controle total do ambiente."
        ],
        logo: "images/2.jpg"
    },
    3: {
        name: "Quarto Econômico",
        description: [
            "🛌 Cama Simples: Conforto acessível.",
            "🚿 Chuveiro Funcional: Praticidade para o dia a dia.",
            "🪟 Janela com Cortina: Para um ambiente aconchegante.",
            "☕ Café e Chá Disponíveis: Uma pausa sempre que precisar.",
            "📺 TV Básica: Entretenimento essencial.",
            "🌐 Wi-Fi Gratuito: Navegação inclusa.",
            "❄️ Ventilador de Teto: Ideal para dias quentes."
        ],
        logo: "images/3.jpg"
    },
    4: {
        name: "Suíte Presidencial",
        description: [
            "🛌 Cama Super King Size: Conforto supremo.",
            "🛋️ Sala de Estar Privativa: Elegância em cada detalhe.",
            "🌅 Vista Exclusiva: Paisagens impressionantes.",
            "🍷 Mini Bar Completo: Luxo ao seu alcance.",
            "📺 Smart TV 4K: Imersão total em entretenimento.",
            "🌐 Wi-Fi Ultra-Rápido: Perfeito para trabalho ou lazer.",
            "🌡️ Controle de Clima Avançado: Ambiente sob medida."
        ],
        logo: "images/4.jpg"
    },
    5: {
        name: "Quarto Família",
        description: [
            "🛌 Cama Extra e Beliches: Espaço para todos.",
            "🛋️ Área para Crianças: Diversão garantida.",
            "🍴 Mini-Cozinha: Praticidade para refeições rápidas.",
            "🪟 Vista para o Jardim: Ambiente tranquilo.",
            "☕ Cafeteira Familiar: Café para vários.",
            "📺 TVs Multipontas: Diversão para todas as idades.",
            "🌐 Wi-Fi Rápido: Ideal para streaming e jogos."
        ],
        logo: "images/5.jpg"
    }
}

const content = document.querySelector(".content")

const article = document.createElement("article")
article.classList.add("room")

const roomLogo = document.createElement("img")
roomLogo.classList.add("room-logo")
roomLogo.src = roomsList[2].logo
roomLogo.alt = "Segundo quarto"

const roomTitle = document.createElement("div")
roomTitle.classList.add("room-title")
roomTitle.innerText = roomsList[2].name

const ul = document.createElement("ul")
ul.classList.add("room-info")

for(let i = 0; i < roomsList[2].description.length; i++){
    addList(roomsList[2].description[i])
}

const section = document.createElement("section")
section.classList.add("buttons-section")

const infoButton = document.createElement("button")
infoButton.classList.add("room-info-button")
infoButton.type = "button"
infoButton.innerText = "Ver quarto 🔍"

const bookButton = document.createElement("button")
bookButton.classList.add("book-button")
bookButton.type = "button"
bookButton.innerText = "Reservar 📅"

function addList(liDescription){
    const li = document.createElement("li")
    li.innerText = liDescription
    ul.appendChild(li)
}

article.appendChild(roomLogo)
article.appendChild(roomTitle)
article.appendChild(ul)

section.appendChild(infoButton)
section.appendChild(bookButton)

article.appendChild(section)

content.appendChild(article)

