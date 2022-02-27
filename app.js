const game = () => {
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = () => {
        let playBtn = document.querySelector(".intro .btn");
        let match = document.querySelector(".match");
        let introScreen = document.querySelector(".intro");

        playBtn.addEventListener("click" , () => {
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn");
        });
    };

    startGame();
};

game();