document.getElementById("logout-btn").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="./index.html"

})

// toggle section //

document.getElementById("cash-out").style.display = "none";

document.getElementById('add-money-box').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById("cash-out").style.display = "none";
    document.getElementById("add-money").style.display = "block";

})

document.getElementById('cash-out-box').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById("add-money").style.display = "none";
    document.getElementById("cash-out").style.display = "block";

})



