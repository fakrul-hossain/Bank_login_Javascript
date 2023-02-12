/* 
1. add event handler with the withdraw button
2. get the withdraw
2.5 also make sure to convert the input into a number by using parseFloat
3.get previous withdraw total
4. calculate total withdraw amount
4.5. set total withdraw amount 
// 5 . set the total balance
6. calculate new balance
6.5 set the new balance
*/

document.getElementById('btn_withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw_field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-7 : clear the  input field
    withdraw_field.value = '';
    
    if (isNaN(newWithdrawAmount)) {
        alert('Please input valid number')
        return
    }
    // step-3 :
    const withdrawTotalElement = document.getElementById('withdraw_total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    
    // step-5
    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Amount not available ')
        return
    }
    // step-4 :
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal
    // step-6
    const totalBalance = previousBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = totalBalance;

});