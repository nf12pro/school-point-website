let points = 0; // Set up the variable in JavaScript

document.getElementById('button_true').addEventListener('click', function() {
    points += 10; // Add points
    document.getElementById('points').innerText = 'Points: ' + points;
    document.getElementById('response').innerText = 'Correct! +10 points. Total: ' + points;
});

document.getElementById('button_false').addEventListener('click', function() {
    points -= 5; // Subtract points
    document.getElementById('points').innerText = 'Points: ' + points;
    document.getElementById('response').innerText = 'Wrong! -5 points. Total: ' + points;
});