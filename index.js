$(document).ready(function () {
    console.log("ready!");
    var firstvar="";
    var secondvar="";
    var operator = ""; 
    var result = 0;

    function clear () {
         firstvar = "";
         secondvar = "";
         operator = "";
         result = 0;
    


    }

    $('.numbtn').on('click', function (){
            if (operator ==="") {
            firstvar = $(this).text();
                $('#var1').append(firstvar);
                firstvar = Number(firstvar); 
                console.log(firstvar)


            }
            else {
            secondvar = $(this).text();
                $('#var2').append(secondvar);
                console.log(secondvar)

            }
    
    });

    $('.opbtn').on('click', function () {
        operator = $(this).text();
        $('#operator').append(operator)
    });

    $('#clear').on('click', function () {
        clear();
         $('#var1').empty();
         $('#var2').empty();
         $('#operator').empty();
         $('#ans').empty();

         

    });

    $('#equal').on('click', function () {
        
            var num1 = $('#var1').text();
            num1 = Number(num1);
            console.log(num1);

            var num2 = $('#var2').text();
            num2 = Number(num2);
            console.log(num2);

    
        if (operator ==="+") {
            result = num1 + num2;
            console.log(result);
            $('#ans').append(result);
            
        }
        if (operator === "-") {
            result = num1 - num2;
            console.log(result);
            $('#ans').append(result);

        }
        if (operator === "/") {
            result = num1/num2;
            console.log(result);
            $('#ans').append(result);

        }
        if (operator === "*") {
            result = num1*num2;
            console.log(result);
            $('#ans').append(result);

        }

        clear();
    });
    

});