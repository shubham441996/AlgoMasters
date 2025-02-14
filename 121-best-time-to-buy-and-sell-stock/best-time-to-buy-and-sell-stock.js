/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let maxValue=0
    // for(let i=0;i<prices.length;i++){
    //     let j=prices.length-1
    //     while(j>i){
    //       let res= prices[j]-prices[i]
    //       if(res>maxValue){
    //         maxValue=res
    //       }
    //       j--;
    //     }
    // }
    // return maxValue;
    let buy=prices[0]
    let max=0
    for(let i=1;i<prices.length;i++){
        if(buy>prices[i]){
            buy=prices[i]
        }
        max= Math.max(prices[i]-buy,max)
    }
    return max
};
