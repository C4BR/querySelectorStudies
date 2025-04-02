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
        logo: "images/1.jpg",
        logoAlt: "Imagem da Suíte Dupla"
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
        logo: "images/2.jpg",
        logoAlt: "Imagem do Quarto Deluxe"
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
        logo: "images/3.jpg",
        logoAlt: "Imagem do Quarto Econômico"
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
        logo: "images/4.jpg",
        logoAlt: "Imagem da Suíte Presidencial"
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
        logo: "images/5.jpg",
        logoAlt: "Imagem do Quarto Família"
    },
    6: {
        name: "Quarto Single",
        description: [
            "🛌 Cama de Solteiro: Conforto para uma pessoa.",
            "🚿 Chuveiro Eficiente: Praticidade para seu dia.",
            "🪟 Vista Interna: Ambiente acolhedor.",
            "☕ Cafeteira Individual: Um toque de conveniência.",
            "📺 TV Compacta: Entretenimento básico.",
            "🌐 Wi-Fi Incluso: Conectividade garantida.",
            "❄️ Ventilador Silencioso: Conforto sob medida."
        ],
        logo: "images/6.jpg",
        logoAlt: "Imagem do Quarto Single"
    },
    7: {
        name: "Suíte Luxo",
        description: [
            "🛌 Cama King Size: Descanso sofisticado.",
            "🛁 Banheira com Hidromassagem: Relaxamento completo.",
            "🌅 Vista para o Lago: Cenário inspirador.",
            "🍹 Bebidas de Cortesia: Para sua recepção.",
            "📺 Smart TV: A mais alta qualidade de imagem.",
            "🌐 Wi-Fi Rápido: Para trabalho e lazer.",
            "🌡️ Sistema de Climatização: Conforto absoluto."
        ],
        logo: "images/7.jpg",
        logoAlt: "Imagem da Suíte Luxo"
    },
    8: {
        name: "Quarto Rústico",
        description: [
            "🛌 Cama Queen com Lençóis de Algodão: Toque aconchegante.",
            "🪵 Decoração Rústica: Ambiente charmoso.",
            "🪟 Vista para a Montanha: Contato com a natureza.",
            "🍳 Mini-Cozinha: Para refeições rápidas.",
            "📺 TV de Tela Plana: Entretenimento garantido.",
            "🌐 Wi-Fi Básico: Para checar e-mails.",
            "🔥 Lareira: Perfeito para noites frias."
        ],
        logo: "images/8.jpg",
        logoAlt: "Imagem do Quarto Rústico"
    },
    9: {
        name: "Quarto Tropical",
        description: [
            "🛌 Cama King com Mosquiteiro: Conforto no estilo tropical.",
            "🌴 Decoração Temática: Uma experiência vibrante.",
            "🪟 Vista para o Jardim: Para relaxar na natureza.",
            "☕ Cafeteira e Chaleira Elétrica: Escolha sua bebida.",
            "📺 TV com Streaming: Divirta-se à vontade.",
            "🌐 Wi-Fi Rápido: Perfeito para chamadas e vídeos.",
            "❄️ Ar-Condicionado Silencioso: Combate o calor tropical."
        ],
        logo: "images/9.jpg",
        logoAlt: "Imagem do Quarto Tropical"
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
    addList(ul, roomsList[2].description[i])
}

function addList(ul, liDescription){
    const li = document.createElement("li")
    li.innerText = liDescription
    ul.appendChild(li)
}

function insertRooms(roomsList){
    const rooms = Object.values(roomsList)

    const content = document.querySelector(".content")

    for(let room = 0; room < rooms.length; room++){
        
        const article = document.createElement("article")
        article.classList.add("room")

        const img = document.createElement("img")
        img.classList.add("room-logo")
        img.src = rooms[room].logo
        img.alt = rooms[room].logoAlt

        const titleDiv = document.createElement("div")
        titleDiv.classList.add("room-title")
        titleDiv.innerText = rooms[room].name

        const ul = document.createElement("ul")
        ul.classList.add("room-info")

        for(let i = 0; i < rooms[room].description.length; i++){
            console.log(rooms[room].description[i])
            addList(ul, rooms[room].description[i])
        }

        const buttonsSection = document.createElement("section")
        buttonsSection.classList.add("buttons-section")

        const infoButton = document.createElement("button")
        infoButton.classList.add("room-info-button")
        infoButton.type = "button"
        infoButton.innerText = "Ver quarto 🔍"

        const bookButton = document.createElement("button")
        bookButton.classList.add("book-button")
        bookButton.type = "button"
        bookButton.innerText = "Reservar 📅"

        article.appendChild(img)
        article.appendChild(titleDiv)
        article.appendChild(ul)
        
        buttonsSection.appendChild(infoButton)
        buttonsSection.appendChild(bookButton)

        article.appendChild(buttonsSection)

        content.appendChild(article)
    }
}

insertRooms(roomsList)