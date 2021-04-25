var p = document.getElementById("principal").value;
var r = document.getElementById("rate").value;
var ys = document.getElementById("years").value;
var i = principal * years * rate /100; document.getElementById("result").innerHTML=i;
var y = new Date().getFullYear()+parseInt(years);

function principal_validation() 
{
  if (p <= "0") {
      alert("Enter a positive number");
      ("principal").focus()
  }
} 

function updateRate() 
{
    var rv = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rv;
}

function compute()
{
    var a = document.getElementById("answer").innerText = "If you deposit " + p + " at an interest rate of " + r + "%, you will receive an amount of interest " + i + " in the year " + ys + ".";
}

