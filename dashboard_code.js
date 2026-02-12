let points = 0;
let purchase_id = 0;

document.getElementById('button_purchase1').addEventListener('click', function() {
    if (confirm('Are you sure you want to make this purchase?')) {
        purchase_id = 1; 
        document.getElementById('points').innerText = 'Points: ' + points;
        document.getElementById('response').innerText = 'Correct! +10 points. Total: ' + points;
    }
});

document.getElementById('button_purchase2').addEventListener('click', function() {
    if (confirm('Are you sure you want to make this purchase?')) {
        purchase_id = 2; 
        document.getElementById('points').innerText = 'Points: ' + points;
        document.getElementById('response').innerText = 'Correct! +10 points. Total: ' + points;
    }
});

document.getElementById('button_purchase3').addEventListener('click', function() {
    if (confirm('Are you sure you want to make this purchase?')) {
        purchase_id = 3; 
        document.getElementById('points').innerText = 'Points: ' + points;
        document.getElementById('response').innerText = 'Correct! +10 points. Total: ' + points;
    }
});

document.getElementById('button_purchase4').addEventListener('click', function() {
    if (confirm('Are you sure you want to make this purchase?')) {
        purchase_id = 4;
        document.getElementById('points').innerText = 'Points: ' + points;
        document.getElementById('response').innerText = 'Correct! +10 points. Total: ' + points;
    }
});