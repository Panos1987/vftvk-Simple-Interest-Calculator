var p = document.getElementById("principal").value;
var r = document.getElementById("rate").value;
var ys = document.getElementById("years").value;

function p_validation() 
{
  if (p <= "0") 
  {
      alert("Enter a positive number.");
      ("principal").focus();
      return (false);
  }
} 

function updateRate() 
{
    var rv = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rv;
}

function compute()
{
  var i = p * ys * r /100; 
  document.getElementById("result").innerHTML=i;
  var y = new Date().getFullYear()+parseInt(ys);
  return p, r, i, y
  var a = document.getElementById("answer").innerHTML = "If you deposit " + p + " at an interest rate of " + r + "%, you will receive an amount of interest " + i + " in the year " + y + ".";
}

