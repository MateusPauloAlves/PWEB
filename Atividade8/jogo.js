const userChoices = document.querySelectorAll('button');
const resultado = document.getElementById('resultado');

userChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(userChoice, computerChoice);
        showResult(userChoice, computerChoice, winner);
    });
});

function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(user, computer) {
    if (user === computer) {
        return 'Empate!';
    }
    if (
        (user === 'pedra' && computer === 'tesoura') ||
        (user === 'papel' && computer === 'pedra') ||
        (user === 'tesoura' && computer === 'papel')
    ) {
        return 'Você venceu!';
    } else {
        return 'O computador venceu!';
    }
}

function showResult(userChoice, computerChoice, winner) {
    resultado.innerHTML = `Você escolheu ${userChoice}. O computador escolheu ${computerChoice}. ${winner}`;
}