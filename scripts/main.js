function getRandomColor() {
    const hexColorCharacter = ['0','1','2','3','4','5','6','7','8','9','0', 'A','B','C','D','E','F'];

    let color = "#";
    for (let i=0; i<6; i++) {
        color += hexColorCharacter[Math.floor(Math.random() * hexColorCharacter.length)];
    }

    return color;
}

function rendderRandomColor() {
    const currentRandomColor = getRandomColor();
    document.getElementById("htmlBody").style.backgroundColor=currentRandomColor;
    document.getElementById("htmlH1").innerHTML = currentRandomColor;
    console.log(currentRandomColor);
}

rendderRandomColor();