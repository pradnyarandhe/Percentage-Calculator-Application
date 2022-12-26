
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');


var form = document.getElementById('Percentii');

form.addEventListener('submit', function(event){             
    var x = parseFloat(numField1.value);          
    var y = parseFloat(numField2.value);
    
    var result = x / y;
    var percent = result * 100;
    
    resultField.innerText="Your Percentage is: "+ percent+ "%";
    event.preventDefault(); 
});






