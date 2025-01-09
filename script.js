const zodiacData = [
    {
        name: "Bélier",
        symbol: "♈",
        predictions: [
            "Tu vas découvrir un nouveau talent caché... peut-être le yodel!",
            "Un ami va te surprendre avec un cadeau... c'est peut-être une licorne!",
            "Cette semaine, ta couleur porte-bonheur sera le rose fluo!"
        ],
        funFact: "Les Béliers sont tellement impatients qu'ils finissent leurs phrases avant de les commencer! 😄"
    },
    {
        name: "Taureau",
        symbol: "♉",
        predictions: [
            "Un festin surprise t'attend... prépare ton estomac!",
            "Tu vas rencontrer quelqu'un qui aime autant le chocolat que toi",
            "Attention aux chaussettes dépareillées, elles portent chance!"
        ],
        funFact: "Les Taureaux adorent tellement le confort qu'ils ont inventé la sieste! 😴"
    },
    {
        name: "Gémeaux",
        symbol: "♊",
        predictions: [
            "Tu vas parler tellement vite que même toi tu ne te comprendra pas!",
            "Un perroquet va répéter tes secrets... surveille tes arrières!",
            "Double chance aujourd'hui, normal t'es Gémeaux!"
        ],
        funFact: "Les Gémeaux parlent tellement qu'ils peuvent tenir une conversation tout seuls! 👥"
    },
    {
        name: "Cancer",
        symbol: "♋",
        predictions: [
            "Ta sensibilité va faire pleurer un oignon!",
            "Câlin surprise en approche... attention aux pinces!",
            "Ta maison va devenir ton château fort!"
        ],
        funFact: "Les Cancers sont si attachants qu'ils collectionnent même les peluches de leurs peluches! 🦀"
    },
    {
        name: "Lion",
        symbol: "♌",
        predictions: [
            "Ta crinière va briller plus fort que le soleil!",
            "Tu vas rugir de joie devant une bonne nouvelle",
            "Ton ego va avoir besoin d'une pièce à part!"
        ],
        funFact: "Les Lions passent tellement de temps devant le miroir qu'ils ont leur propre compte Instagram! 👑"
    },
    {
        name: "Vierge",
        symbol: "♍",
        predictions: [
            "Tu vas ranger ton rangement... encore!",
            "Quelqu'un va déplacer tes post-it parfaitement alignés",
            "Un grain de poussière va te défier!"
        ],
        funFact: "Les Vierges sont si organisées qu'elles planifient même leurs pauses spontanées! 📋"
    },
    {
        name: "Balance",
        symbol: "♎",
        predictions: [
            "Tu vas hésiter entre hésiter et ne pas hésiter!",
            "L'indécision te va si bien aujourd'hui... ou pas?",
            "Une décision facile arrive... ou pas!"
        ],
        funFact: "Les Balances sont si équilibrées qu'elles marchent en faisant le poirier! ⚖️"
    },
    {
        name: "Scorpion",
        symbol: "♏",
        predictions: [
            "Ton regard mystérieux va faire fondre un glaçon!",
            "Un secret va être révélé... mais chut, c'est un secret!",
            "Ta passion va enflammer ton café glacé!"
        ],
        funFact: "Les Scorpions sont si mystérieux qu'ils se surprennent eux-mêmes! 🦂"
    },
    {
        name: "Sagittaire",
        symbol: "♐",
        predictions: [
            "Tu vas voyager... au moins jusqu'à ta cuisine!",
            "Ta franchise va faire rire... ou pleurer!",
            "Une aventure t'attend au coin de la rue!"
        ],
        funFact: "Les Sagittaires sont si aventuriers qu'ils partent en exploration dans leur jardin! 🏹"
    },
    {
        name: "Capricorne",
        symbol: "♑",
        predictions: [
            "Ta détermination va déplacer des montagnes... de papier!",
            "Le succès te suit... mais tu cours plus vite!",
            "Ton agenda est plus rempli que ton frigo!"
        ],
        funFact: "Les Capricornes sont si ambitieux qu'ils planifient leur retraite dès la maternelle! 🐐"
    },
    {
        name: "Verseau",
        symbol: "♒",
        predictions: [
            "Ton originalité va créer une nouvelle mode: les chaussettes sur la tête!",
            "Une idée bizarre va te rendre célèbre... sur Mars!",
            "Tu vas inventer quelque chose d'inutile mais génial!"
        ],
        funFact: "Les Verseaux sont si originaux qu'ils marchent à reculons le mardi! 🌊"
    },
    {
        name: "Poissons",
        symbol: "♓",
        predictions: [
            "Ta créativité va faire pousser des arcs-en-ciel!",
            "Tu vas nager dans le bonheur... littéralement!",
            "Tes rêves vont devenir réalité... attention à ce que tu rêves!"
        ],
        funFact: "Les Poissons sont si rêveurs qu'ils ont inventé les châteaux en Espagne sous l'eau! 🐠"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const resultPopup = document.getElementById('resultPopup');
    
    // Reset de la roue
    wheel.style.transform = 'rotate(0deg)';
    
    // Événement de clic sur le bouton
    spinButton.addEventListener('click', () => {
        // Masquer tous les symboles précédents
        document.querySelectorAll('.wheel-sign').forEach(sign => {
            sign.remove();
        });
        
        spinButton.disabled = true;
        const degrees = 1800 + Math.floor(Math.random() * 360);
        wheel.style.transform = `rotate(${degrees}deg)`;
        
        setTimeout(() => {
            const finalDegree = degrees % 360;
            const signIndex = Math.floor(finalDegree / 30);
            const selectedSign = zodiacData[signIndex];
            
            // Créer et afficher le symbole sélectionné
            const signElement = document.createElement('div');
            signElement.className = 'wheel-sign';
            signElement.textContent = selectedSign.symbol;
            
            // Positionner le symbole
            const angle = (signIndex * 30) - 90;
            const radius = 160;
            signElement.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
            
            wheel.appendChild(signElement);
            
            // Afficher le symbole avec animation
            setTimeout(() => {
                signElement.classList.add('show');
            }, 100);
            
            // Afficher la prédiction
            resultPopup.querySelector('.prediction-title').textContent = 
                `🌟 ${selectedSign.symbol} ${selectedSign.name} 🌟`;
            resultPopup.querySelector('.prediction-text').textContent = 
                selectedSign.predictions[Math.floor(Math.random() * selectedSign.predictions.length)];
            resultPopup.style.display = 'block';
            
            spinButton.disabled = false;
        }, 3000);
    });
    
    // Fermeture du popup
    document.querySelector('.close-btn').addEventListener('click', () => {
        resultPopup.style.display = 'none';
    });
});
