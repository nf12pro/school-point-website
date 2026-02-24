let points = 0;
let purchase_id = 0;

document.getElementById('button_purchase1').addEventListener('click', function() {
    if (confirm('Are you sure you want to make this purchase?')) {
        purchase_id = 1; 
        if (points >= 50) {
            points -= 50;
            document.getElementById('points').innerText = 'Points: ' + points;
            document.getElementById('response').innerText = 'Your Teacher Has Received it';
        } else {
            document.getElementById('response').innerText = 'You do not have enough points.';
        }
    }
});

document.getElementById('button_purchase2').addEventListener('click', function() {
    if (confirm('Are you sure you want to make this purchase?')) {
        purchase_id = 2; 
        points -= 50;
        document.getElementById('points').innerText = 'Points: ' + points;
        document.getElementById('response').innerText = 'Thank you for your purchase!';
    }
});

document.getElementById('button_purchase3').addEventListener('click', function() {
    if (confirm('Are you sure you want to make this purchase?')) {
        purchase_id = 3;
        points += 10;
        document.getElementById('points').innerText = 'Points: ' + points;
        document.getElementById('response').innerText = 'Correct! +10 points. Total: ' + points;
    }
});

document.getElementById('button_purchase4').addEventListener('click', function() {
    if (confirm('Are you sure you want to make this purchase?')) {
        purchase_id = 4;
        points += 10;
        document.getElementById('points').innerText = 'Points: ' + points;
        document.getElementById('response').innerText = 'Correct! +10 points. Total: ' + points;
    }
});