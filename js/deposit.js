
    // step 01
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2
    const  depositFiled =document.getElementById('deposit-filed');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
// newDepositAmount

    // step 3
    const  depositTotalElement =document.getElementById('diposit-total');
    const previousDepositAmountString  = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString );
// previousDepositAmount
 // step 4
    const newDepositTotalAmount = previousDepositAmount + newDepositAmount;
    depositTotalElement.innerText = newDepositTotalAmount;
 // step 5
    const  balancetTotalElement =document.getElementById('balance-total');
    const balancetTotalAmountString  =balancetTotalElement.innerText;
    const balancetTotalAmount = parseFloat(balancetTotalAmountString );
    
 // step 6
    const newBalanceTotal=newDepositTotalAmount + balancetTotalAmount;
    balancetTotalElement.innerText=newBalanceTotal;
    // step 7
    depositFiled.value = ''; 
})