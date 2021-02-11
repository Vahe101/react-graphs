const generateRandomColor = (quantity) => {
    let arr = [
        "#501800",
        "#4B5000",
        "#175000",
        "#e38856",
        "#565656",
        "#121212",
        "#001888",
        "#898999",
    ];
    if (quantity > 0) {
        for (let i = 0; i < quantity; i++) {
            let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            arr.splice(i, 1, randColor);
        }
    }
    return arr;
};

export default generateRandomColor;
