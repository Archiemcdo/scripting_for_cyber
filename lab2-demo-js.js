<!DOCTYPE html>
<html>
<head>
<script>
function showName() {
   var firstName;
   var secondName;

   firstName = prompt('Enter your First Name: ', '');
   secondName = prompt('Enter your Second Name: ', '');
   
   // We add spaces inside quotes " " to separate the names
   var outputMessage = "Your name is " + firstName + " " + secondName;
   
   alert(outputMessage);
}
</script>
</head>

<body>
    <h1>Name Display</h1>
    <p>Click the button to enter your name.</p>
    <input type="button" value="Enter Name" onclick="showName()">
</body>
</html>

<!DOCTYPE html>
<html>
<head>
<script>
function calculateMultiplication() {
   var inputNum1;
   var inputNum2;

   inputNum1 = prompt('Enter the first number: ', 0);
   inputNum2 = prompt('Enter the second number: ', 0);
   
   // We use * for multiplication
   var outputTotal = inputNum1 * inputNum2;
   
   alert('The answer is: ' + outputTotal);
}
</script>
</head>

<body>
    <h1>Multiplying Numbers</h1>
    <p>Click the button to enter two numbers.</p>
    <input type="button" value="Multiply" onclick="calculateMultiplication()">
</body>
</html>

<!DOCTYPE html>
<html>
<head>
<script>
function calculateDivision() {
   var inputNum1;
   var inputNum2;

   inputNum1 = prompt('Enter the number to divide (numerator): ', 0);
   inputNum2 = prompt('Enter the number to divide by (denominator): ', 0);
   
   // We use / for division
   var outputTotal = inputNum1 / inputNum2;
   
   alert('The answer is: ' + outputTotal);
}
</script>
</head>

<body>
    <h1>Dividing Numbers</h1>
    <p>Click the button to enter two numbers.</p>
    <input type="button" value="Divide" onclick="calculateDivision()">
</body>
</html>