const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-btn");
const output = document.querySelector("output");

function calculateProfitAndLoss(cp, sp, quantity) {
    if (sp > cp) {
        const profit = (sp - cp) * quantity;
        return profit;
    } else {
        const loss = (cp - sp) * quantity;
        return loss;
    }
}
function calculateProfitAndLossPercentages(cp, sp) {
    if (sp > cp) {
        const profit = calculateProfitAndLoss(initialPrice.value, currentPrice.value, quantity.value);
        const profitPercent = (profit / cp) * 100;
        return profitPercent.toFixed(2);
    } else {
        const loss = calculateProfitAndLoss(initialPrice.value, currentPrice.value, quantity.value);
        const lossPercent = (loss / cp) * 100;
        return lossPercent.toFixed(2);
    }
}


function clickHandler() {
    const profitOrLoss = calculateProfitAndLoss(initialPrice.value, currentPrice.value, quantity.value);
    const profitOrLossPercent = calculateProfitAndLossPercentages(initialPrice.value, currentPrice.value);
    if(initialPrice.value < currentPrice.value){
        output.innerText = `profit: ${profitOrLoss} and profitpercent: ${profitOrLossPercent}`;
    }else{
        output.innerText = `loss: ${profitOrLoss} and losspercent: ${profitOrLossPercent}`;
    }
}
showBtn.addEventListener("click", clickHandler);