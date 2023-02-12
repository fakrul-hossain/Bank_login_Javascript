// step-1 : add event listener to the deposit button
document.getElementById("btn_deposit").addEventListener("click", function () {
  // step-2 : get the deposit amount form the deposit input filed
  // for the filed use .value to the the value inside the input filed
  const depositFiled = document.getElementById("deposit_field");
  const newDepositAmountString = depositFiled.value;
  const newDepositAmount = parseFloat(newDepositAmountString)

  // step 7: clear the deposit field
  deposit_field.value = "";
  if (isNaN(newDepositAmount)) {
    alert('Please input valid number')
    return
}
  // step-3 : get the current deposit total
  // for non-input (element other than input, textarea) use inner Text to get the text
  const depositTotalElement = document.getElementById("total_deposit");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString) 
//   step-4 : add number to set the total deposit 
 const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;
// step-5 : get current ballance total
const balanceTotalElement = document.getElementById('balance_total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step-6 calculate deposit
 const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//  set the balance total
balanceTotalElement.innerText =currentBalanceTotal;
});
