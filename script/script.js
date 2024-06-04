document.getElementById('check').addEventListener('click', function() {
    // Get the input value
    const input = document.getElementById('minMaxinp1').value;
    // Split the input string into an array of numbers
    const numbers = input.split(',').map(Number);
    // Calculate the minimum and maximum values
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    // Display the minimum and maximum values
    document.getElementById('min').innerText = min;
    document.getElementById('max').innerText = max;
});