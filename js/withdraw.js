
// step 01
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step 2
    const  withdrawtFiled =document.getElementById('width-filed');
    const newWidthAmountString = withdrawtFiled.value;
    const newWithdrawAmount = parseFloat(newWidthAmountString);  
   
// sstep 3 =b
    withdrawtFiled.value = ''; 

// sstep 4
    const  withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawAmountString  = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString );
// sstep 5
    const newWithdrawTotalAmount = previousWithdrawAmount +newWithdrawAmount ;
    withdrawTotalElement.innerText = newWithdrawTotalAmount;
// sstep 6
    const  balanceElement =document.getElementById('balance-total');
    const previousBalanceTotalString  = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString );
    
// sstep 7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal ;

})