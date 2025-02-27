document.getElementById('login-btn').addEventListener("click", function(event){
    event.preventDefault();

    const acNumber = document.getElementById('ac-number').value;
    
    const acPin = document.getElementById('ac-pin').value;
    const convetPin = parseInt(acPin)

   if (acNumber === "01301301301"){ //  issues 01
    if(convetPin===1234){
        window.location.href="./main.html"

    }
    else{
        alert("  Incorrect Pin")
    }
   }
   else{
    alert("Need A Valid AC Number");
   }

    
})
