document.getElementById('calculate').addEventListener('click', function() {
    const operation = document.getElementById('operation').value;
    const percentage = parseFloat(document.getElementById('percentage').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || isNaN(percentage)) {
        document.getElementById('result').innerText = 'Veuillez entrer un montant et un pourcentage valides';
        return;
    }

    const percentageValue = amount * (percentage / 100);
    let result;
    let message;
    
    if (operation === 'plus') {
        result = amount + percentageValue;
        message = `Le montant après ajout de ${percentage}% est : ${result.toFixed(2)} DT (ajouté : ${percentageValue.toFixed(2)} DT)`;
    } else if (operation === 'minus') {
        result = amount - percentageValue;
        message = `Le montant après soustraction de ${percentage}% est : ${result.toFixed(2)} DT (soustrait : ${percentageValue.toFixed(2)} DT)`;
    } else {
        message = 'Opération non reconnue';
    }

    document.getElementById('result').innerText = message;
});
