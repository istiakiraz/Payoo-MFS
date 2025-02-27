document.getElementById("cashout-btn").addEventListener("click" , function(event){
    event.preventDefault();

    const amount = document.getElementById("cashout-amount").value;
    const convertAmount = parseFloat(amount);
   
    const pin = document.getElementById('cash-out-pin').value;
    const convetPin = parseInt(pin);
   
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);

    const agentNumber = document.getElementById('agent-number').value;
   

    if(amount && pin){

        if(agentNumber === "01301301301"){
            if(convetPin === 1234){

                const sum = convertMainBalance - convertAmount;
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
