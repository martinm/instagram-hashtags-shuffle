let credits = document.getElementById("credits");

creditsClicked = () => {
    window.open("https://www.google.com")
}

credits.addEventListener("click", creditsClicked);

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
    return text.split(by);
}

shuffleBtnPressed = () => {
    let inputText = document.getElementById("inputText");
    let arr = splitText(inputText.value, " ");
    if (arr.length > 1) {

        shuffle(arr);
        inputText.value = arr.join(" ");

        document.getElementById("copyBtn").innerText = "COPY (" + arr.length + ")";
        document.getElementById("clearBtn").innerText = "CLEAR (" + arr.length + ")";
    } else {
        document.getElementById("copyBtn").innerText = "COPY (0)";
        document.getElementById("clearBtn").innerText = "CLEAR (0)";
    }
}

copyContent = () => {
    let inputText = document.getElementById("inputText");

    if (isiOS()) {
        let range = document.createRange();
            range.selectNodeContents(inputText);
            let selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            inputText.setSelectionRange(0, 999999);
    } else {
        inputText.select();
    }
    document.execCommand('copy');

}

clearContent = () => {
    document.getElementById("inputText").value = "";
    document.getElementById("copyBtn").innerText = "COPY (0)";
    document.getElementById("clearBtn").innerText = "CLEAR (0)";
}

isiOS = () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
}

