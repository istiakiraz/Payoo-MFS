document.getElementById('addmoney-btn').addEventListener("click" , function(event){
    event.preventDefault();
    
    const amount = document.getElementById("amount").value;
    const convertAmount = parseFloat(amount);
   
    const pin = document.getElementById('pin').value;
    const convetPin = parseInt(pin);
   
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);

    const acNumber = document.getElementById('ac-number').value;
   

    if(amount && pin){

        if(acNumber === "01301301301"){
            if(convetPin === 1234){

                const sum = convertAmount + convertMainBalance;
                document.getElementById("main-balance").innerText = sum;
            }
            else{
                alert("Pin incorrect")
            }

        }
        else{
            alert("Invalid AC Number")
        }
    }

    else{
        alert("Enter Amount");
    }


})