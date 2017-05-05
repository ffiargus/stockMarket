// function maxProfit(stockPrices){
//   var highestProfit = 0;

//   for(var i = 0; i < stockPrices.length - 1; i++){
//     for(var j = 1; j < stockPrices.length - i; j++){
//       var profit = 0;
//       profit = stockPrices[i + j] - stockPrices[i];
//       // console.log(profit);
//       if (profit > highestProfit){
//         highestProfit = profit;
//       }
//     }
//   }
//   return highestProfit;
// }

function maxProfit(stockPrices){
  if (stockPrices.length <= 1){
    return 0;
  }

  var left = stockPrices.slice(0, stockPrices.length/2);
  var right = stockPrices.slice(stockPrices.length/2);

  var leftBest = maxProfit(left);
  var rightBest = maxProfit(right);

  var allBest = Math.max.apply(null, right) - Math.min.apply(null, left);

  return Math.max(leftBest, rightBest, allBest);

}

var input = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(input));

