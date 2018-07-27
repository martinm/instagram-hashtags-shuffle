// Fisher–Yates shuffle algorithm 
shuffle = (arr) => {
    let length = arr.length;
    let temp;
    let i;

    while (length) {
        i = Math.floor(Math.random() * length--)

        temp = arr[length];
        arr[length] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

splitText = (text, by) => {
    return text .split(by);
}

shuffleBtnPressed = () => {
    let inputText = document.getElementById("inputText");
    let arr = splitText(inputText.value, " ");
    shuffle(arr);
    inputText.value = arr.join(" ");

    document.getElementById("copyBtn").innerText = "COPY ("+arr.length+")";
    document.getElementById("clearBtn").innerText = "CLEAR ("+arr.length+")";
}

copyContent = () => {
    let inputText = document.getElementById("inputText");
    inputText.select();
    document.execCommand("copy");
}

clearContent = () => {
    document.getElementById("inputText").value = "";

    document.getElementById("copyBtn").innerText = "COPY (0)";
    document.getElementById("clearBtn").innerText = "CLEAR (0)";
}



// #sdfds #fsfdsf #dsaddcvx #okofokdfos #vcxvxcv