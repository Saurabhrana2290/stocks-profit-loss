const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-btn");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, current, quantity) {
    if (current > initial) {
        const profit = (current - initial) * quantity;
        const profitPercent = (profit / initial) * 100;
        output.innerText = `Hey! the profit is ${profit.toFixed(2)} and the percentage is ${profitPercent.toFixed(2)}%`;
    } else if(current < initial){
        const loss = (initial - current) * quantity;
        const lossPercent = (loss / initial) * 100;
        output.innerText = `Hey! the loss is ${loss.toFixed(2)} and percentage is ${lossPercent.toFixed(2)}%`;
    }
    else{
        output.innerText = `No profit and No loss`;
    }
}
function clickHandler() {
    calculateProfitAndLoss(Number(initialPrice.value),Number(currentPrice.value),Number(quantity.value));
}
showBtn.addEventListener("click", clickHandler);