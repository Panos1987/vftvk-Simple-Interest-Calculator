function updateRate() 
{
    var rv = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rv;
}

function compute()
{
  var p = document.getElementById("principal").value;
  var r = document.getElementById("rate").value;
  var ys = document.getElementById("years").value;
  var i = p * ys * r /100; 
  document.getElementById("result").innerHTML=i;
  var y = new Date().getFullYear()+parseInt(ys);
  var a = document.getElementById("answer").innerHTML = "If you deposit " + "<span class='highlight'>" + p + "</span>" + " at an interest rate of " + "<span class='highlight'>" + r + "</span>" + "%, you will receive an amount of interest " + "<span class='highlight'>" + i +"</span>" + " in the year " + "<span class='highlight'>" + y + "</span>" + ".";
}

function p_validation() 
{
  var p = document.getElementById("principal").value;
  if (p <= "0") 
  {
      alert("Enter a positive number.");
      ("principal").focus();
      return (false);
  }
} 
