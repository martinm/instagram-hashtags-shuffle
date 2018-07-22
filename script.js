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

