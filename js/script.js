//creating variables
var income, interest, loan, discret, annual;


//Inserts commas at every 1000 mark
function addCommas(nStr)
{
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

//says income, interest, and loan variables equal the value that is inputed into the income, interest, and loan input boxes
function setValues() {
  income = Number(document.getElementById('income').value)
  interest = Number(document.getElementById('interest').value)
  loan = Number(document.getElementById('loan').value)
}

//Setting values for each name in calc function
function calc() {
  setValues();
  payment = ((income - 17655) * .1) / 12;
  allPay = (payment * 12) * 20;
  leftover = ((loan +(loan * (interest * .01))) - allPay);
  
//Your monthly payment 
  document.getElementById("paymentText").innerHTML = "Your monthly payment";
  
if (payment >= 0){
 document.getElementById("payment").innerHTML = "$" + addCommas((Math.round(payment * 100) / 100));
}
else{
  document.getElementById("payment").innerHTML = "$" + 0;
}
  
document.getElementById("avgPayment").innerHTML = "The average 2014 alumni would have had a monthly payment of $16.23."
  
//Total amount to be paid back
//if the amt to be paid back is less than/equal to the loan + interest, show how much is left to be paid back
document.getElementById("allPayText").innerHTML = "Amount to be paid back in 20 years";  
  
if (allPay <= (loan +(loan *(interest *.01)))){   document.getElementById("allPay").innerHTML = "$" + addCommas((Math.round(allPay * 100) / 100));
                                            if (allPay <= 0){
 document.getElementById("allPay").innerHTML = "$" + 0;                            }
}
  
  //if it's greater than that number, just show the total that you could possibly pay back (loan + interest)
  else{
   document.getElementById("allPay").innerHTML = "$" + addCommas((loan +(loan * (interest * .01))));
  }

//Amount to be forgiven
document.getElementById("leftoverText").innerHTML = "Amount to be forgiven after 20 years" ;
  
if (leftover >= 0){
document.getElementById("leftover").innerHTML = "$" + addCommas(leftover);
  
  if (payment <= 0)
document.getElementById("leftover").innerHTML = "$" + 0;
}
  
else{
document.getElementById("leftover").innerHTML = "$" + 0;
}
  
}

