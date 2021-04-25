var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100; document.getElementById("result").innerHTML=interest;
var year = new Date().getFullYear()+parseInt(years);

function principal_validation() 
{
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
    return interest;
}

function compute()
{
    display = "If you deposit " + principal + " at an interest rate of " + rate + ", you will receive an amount of interest " + interest + " in the year " + year + ".";
}

