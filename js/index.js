window.onload = function () {
    for (let i = 1; i < 10; i++) {
        document.querySelector("#game").innerHTML +=
            '<div class="block"></div>';
    }

    let moveFlag = 0;
    let draw = 0;
    let gameOver = 0;
    let valueX = 0;
    let valueY = 0;
    let countWinX = sessionStorage.getItem("winX");
    let countWinY = sessionStorage.getItem("winY");
    let gameCount = sessionStorage.getItem("gameCounter");
    let drawCounter = sessionStorage.getItem("drawCount");
    let storageName1 = sessionStorage.getItem("playerName1");
    let storageName2 = sessionStorage.getItem("playerName2");

    if (!storageName1 || !storageName2) {
        let player1 = prompt("Введите имя первого игрока");
        let player2 = prompt("Введите имя второго игрока");
        sessionStorage.setItem("playerName1", player1);
        sessionStorage.setItem("playerName2", player2);
        document.querySelector(".gameCount").innerHTML = `Игр сыграно: ${
            !gameCount ? gameOver : gameCount
        }`;
        document.querySelector(".winX").innerHTML = `${
            !player1 ? "Игрок Х " : player1
        } </br></br> Побед: ${!countWinX ? valueX : countWinX}`;
        document.querySelector(".draw").innerHTML = `Ничья: ${
            !drawCounter ? draw : drawCounter
        }`;
        document.querySelector(".winY").innerHTML = `${
            !player2 ? "Игрок Y " : player2
        } </br></br> Побед: ${!countWinY ? valueY : countWinY}`;
    } else {
        document.querySelector(".gameCount").innerHTML = `Игр сыграно: ${
            !gameCount ? gameOver : gameCount
        }`;
        document.querySelector(
            ".winX"
        ).innerHTML = `${storageName1} </br></br> Побед: ${
            !countWinX ? valueX : countWinX
        }`;
        document.querySelector(".draw").innerHTML = `Ничья: ${
            !drawCounter ? draw : drawCounter
        }`;
        document.querySelector(
            ".winY"
        ).innerHTML = `${storageName2} </br></br> Побед: ${
            !countWinY ? valueY : countWinY
        }`;
    }

    let cell = document.querySelector("#game");
    cell.onclick = function (event) {
        if (event.target.className === "block") {
            if (moveFlag % 2 === 0) {
                if (event.target.textContent === "") {
                    event.target.innerHTML = "x";
                } else {
                    event.target.preventDefault();
                }
            } else {
                if (event.target.textContent === "") {
                    event.target.innerHTML = "o";
                } else {
                    event.target.preventDefault();
                }
            }
        }
        moveFlag += 1;
        checkWinner();
    };
    const checkWinner = () => {
        let block = document.getElementsByClassName("block");
        if (
            block[0].innerHTML === "x" &&
            block[1].innerHTML === "x" &&
            block[2].innerHTML === "x"
        ) {
            alert("Победили Крестики!");
            sessionStorage.setItem("winX", Number(countWinX) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[0].innerHTML === "x" &&
            block[4].innerHTML === "x" &&
            block[8].innerHTML === "x"
        ) {
            alert("Победили Крестики!");
            sessionStorage.setItem("winX", Number(countWinX) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[2].innerHTML === "x" &&
            block[4].innerHTML === "x" &&
            block[6].innerHTML === "x"
        ) {
            alert("Победили Крестики!");
            sessionStorage.setItem("winX", Number(countWinX) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[0].innerHTML === "x" &&
            block[3].innerHTML === "x" &&
            block[6].innerHTML === "x"
        ) {
            alert("Победили Крестики!");
            sessionStorage.setItem("winX", Number(countWinX) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[6].innerHTML === "x" &&
            block[7].innerHTML === "x" &&
            block[8].innerHTML === "x"
        ) {
            alert("Победили Крестики!");
            sessionStorage.setItem("winX", Number(countWinX) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[8].innerHTML === "x" &&
            block[2].innerHTML === "x" &&
            block[5].innerHTML === "x"
        ) {
            alert("Победили Крестики!");
            sessionStorage.setItem("winX", Number(countWinX) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[3].innerHTML === "x" &&
            block[4].innerHTML === "x" &&
            block[5].innerHTML === "x"
        ) {
            alert("Победили Крестики!");
            sessionStorage.setItem("winX", Number(countWinX) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[1].innerHTML === "x" &&
            block[4].innerHTML === "x" &&
            block[7].innerHTML === "x"
        ) {
            alert("Победили Крестики!");
            sessionStorage.setItem("winX", Number(countWinX) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[0].innerHTML === "o" &&
            block[1].innerHTML === "o" &&
            block[2].innerHTML === "o"
        ) {
            alert("Нолики победили!");
            sessionStorage.setItem("winY", Number(countWinY) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[0].innerHTML === "o" &&
            block[4].innerHTML === "o" &&
            block[8].innerHTML === "o"
        ) {
            alert("Нолики победили!");
            sessionStorage.setItem("winY", Number(countWinY) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[2].innerHTML === "o" &&
            block[4].innerHTML === "o" &&
            block[6].innerHTML === "o"
        ) {
            alert("Нолики победили!");
            sessionStorage.setItem("winY", Number(countWinY) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[0].innerHTML === "o" &&
            block[3].innerHTML === "o" &&
            block[6].innerHTML === "o"
        ) {
            alert("Нолики победили!");
            sessionStorage.setItem("winY", Number(countWinY) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[6].innerHTML === "o" &&
            block[7].innerHTML === "o" &&
            block[8].innerHTML === "o"
        ) {
            alert("Нолики победили!");
            sessionStorage.setItem("winY", Number(countWinY) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[8].innerHTML === "o" &&
            block[2].innerHTML === "o" &&
            block[5].innerHTML === "o"
        ) {
            alert("Нолики победили!");
            sessionStorage.setItem("winY", Number(countWinY) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[3].innerHTML === "o" &&
            block[4].innerHTML === "o" &&
            block[5].innerHTML === "o"
        ) {
            alert("Нолики победили!");
            sessionStorage.setItem("winY", Number(countWinY) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (
            block[1].innerHTML === "o" &&
            block[4].innerHTML === "o" &&
            block[7].innerHTML === "o"
        ) {
            alert("Нолики победили!");
            sessionStorage.setItem("winY", Number(countWinY) + 1);
            window.location.reload();
            event.target.preventDefault();
        }
        if (moveFlag === 9) {
            sessionStorage.setItem("drawCount", Number(drawCounter) + 1);
            alert("Ничья!");
            window.location.reload();
        }
        sessionStorage.setItem("gameCounter", Number(gameCount) + 1);
    };

    const button = document.querySelector(".newGameBtn");
    const button2 = document.querySelector(".resetResultBtn");
    button.onclick = () => {
        window.location.reload();
    };
    button2.onclick = () => {
        let resetResult = confirm(
            "Вы уверены, что хотите обнулить общий счёт игр?"
        );
        if (resetResult) {
            sessionStorage.removeItem("winX");
            sessionStorage.removeItem("winY");
            sessionStorage.removeItem("drawCount");
            sessionStorage.removeItem("gameCounter");
        }
        window.location.reload();
    };
};
