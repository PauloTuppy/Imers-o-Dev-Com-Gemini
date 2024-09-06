// Adding accessibility for screen readers
function getSiteDescription() {
    return {
        title: "Busca de Atletas e Equipes de E-sports",
        description: "Este site oferece informações sobre os melhores jogadores e equipes de CS:GO, League of Legends, Free Fire, e Valorant.",
        sections: [
            { name: "CS:GO", description: "Explore os melhores jogadores e equipes de Counter-Strike: Global Offensive." },
            { name: "League of Legends", description: "Descubra os campeões e times de elite de League of Legends." },
            { name: "Free Fire", description: "Conheça os melhores atiradores de Free Fire." },
            { name: "Valorant", description: "Explore os melhores jogadores e equipes de Valorant." }
        ],
        navigation: "O site possui uma barra de navegação com links para CS:GO, League of Legends, Free Fire, e Valorant."
    };
}

function readSiteDescription() {
    const description = getSiteDescription();
    const fullDescription = `
        ${description.title}. ${description.description}
        ${description.navigation}
        O site contém ${description.sections.length} seções principais:
        ${description.sections.map(section => `${section.name}: ${section.description}`).join('. ')}
    `;
    
    announce(fullDescription);
}

function getSiteNavigation() {
    return {
        navigation: "O site possui uma barra de navegação com links para CS:GO, League of Legends, Free Fire, e Valorant."
    };
}

function readSiteNavigation() {
    const navigation = getSiteNavigation();
    announce(navigation.navigation);
}

function announce(message) {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.classList.add('visually-hidden');
    document.body.appendChild(announcer);
    
    announcer.textContent = message;
}

window.addEventListener('load', () => {
    readSiteDescription();
    readSiteNavigation(); // Ensure navigation is read on load
});