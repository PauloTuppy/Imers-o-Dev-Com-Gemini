const playersDB = {
    csgo: ['Player1', 'Player2', 'TeamA'],
    lol: ['Player3', 'Player4', 'TeamB'],
    freefire: ['Player5', 'Player6', 'TeamC'],
    valorant: ['Player7', 'Player8', 'TeamD']
};

function searchPlayers(game, query) {
    if (!playersDB[game]) return []; // Check if game exists
    if (!query) return playersDB[game]; // Return all players if query is empty
    return playersDB[game].filter(player => player.toLowerCase().includes(query.toLowerCase()));
}

document.querySelectorAll('.search-form').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const game = this.querySelector('input[name="game"]').value;
        const query = this.querySelector('input[name="q"]').value;
        const results = searchPlayers(game, query);
        alert('Results: ' + (results.length ? results.join(', ') : 'Nenhum jogador encontrado.'));
    });
});