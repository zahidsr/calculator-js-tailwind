function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value) || 0; 
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result = 0;

    switch(operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if(num2 === 0) {
            alert('Sıfıra bölünemez!');
                return;
                }
            result = num1 / num2;
            break;
            }

            document.getElementById('result').textContent = result.toFixed(2);
}


