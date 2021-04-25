p = document.getElementById("principal").value;
r = document.getElementById("rate").value;
ys = document.getElementById("years").value;
i = p * ys * r /100; document.getElementById("result").innerHTML=i;
y = new Date().getFullYear()+parseInt(years);

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
    rv = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rv;
}

function compute()
{
    a = document.getElementById("answer").innerHTML = "If you deposit " + p + " at an interest rate of " + r + "%, you will receive an amount of interest " + i + " in the year " + ys + ".";
}

