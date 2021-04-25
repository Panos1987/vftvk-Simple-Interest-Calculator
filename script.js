function principal_validation() 
{
  var principal = document.getElementById("principal").value;
  if (principal <= "0") 
    {alert("Enter a positive number");
     ("principal").focus()}
} 

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function output_result()
{
    var interest = principal * years * rate /100;
    document.getElementById("result").innerText=interest;
    return interest;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
}


