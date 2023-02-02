function getRandomColor() {
    const hexList = ['0','1','2','3','4','5','6','7','8','9','0', 'A','B','C','D','E','F'];

    let randomColor = "#";
    let randIndex = "0";
    
    for (let i=0; i<6; i++) {
        randIndex = Math.floor(Math.random() * hexList.length);
        randomColor += hexList[randIndex];
    }

    return randomColor;
}



function getRandomBackground() {
    const totalBg = 14;
    const randBg = `bg${Math.floor(Math.random() * totalBg)}.webp`;

    return randBg
}




function getRandomSet() {
    const color= getRandomColor();
    const background = getRandomBackground();

    document.getElementById("htmlBody").style.backgroundColor=color;
    document.getElementById("htmlH1").innerHTML = color;
    document.title=`${color} 🌈 Magic Color XXL`;

    document.getElementById("htmlBody").style.backgroundImage=`url('../images/${background}')`;

    console.log('Hex:',color,'BG:',background);
}
