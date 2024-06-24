document.getElementById('shuffleButton').addEventListener('click', function() {
    let container = document.querySelector('.container');
    let rows = Array.from(container.querySelectorAll('.row'));

    rows.forEach(function(row) {
        let elements = Array.from(row.children);
        elements.forEach(function(element) {
            row.removeChild(element);
        });
        shuffle(elements);
        elements.forEach(function(element) {
            row.appendChild(element);
        });
    });
});

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
