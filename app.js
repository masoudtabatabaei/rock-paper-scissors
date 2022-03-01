const game = () => {
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro .btn");
        const match = document.querySelector(".match");
        const introScreen = document.querySelector(".intro");

        playBtn.addEventListener("click" , () => {
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn");
        });
    };

    startGame();
};

game();