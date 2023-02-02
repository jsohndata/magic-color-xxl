function getRandomColor() {
    const hexColorCharacter = ['0','1','2','3','4','5','6','7','8','9','0', 'A','B','C','D','E','F'];

    let color = "#";
    let randIndex = "0";
    for (let i=0; i<6; i++) {
        randIndex = Math.floor(Math.random() * hexColorCharacter.length);
        color += hexColorCharacter[randIndex];
    }

    return color;
}



function getRandomBackground() {
    const totalBG = 9;
    const randBg = `bg${Math.floor(Math.random() * totalBG)}.webp`;

    return randBg
}




function getRandomSet() {
    const randomColor = getRandomColor();
    const background = getRandomBackground();

    document.getElementById("htmlBody").style.backgroundColor=randomColor;
    document.getElementById("htmlH1").innerHTML = randomColor;
    document.title=`${randomColor} 🌈 Magic Color XXL`;

    document.getElementById("htmlBody").style.backgroundImage=`url('../images/${background}')`;

    console.log('Hex:',randomColor,'BG:',background);
}
