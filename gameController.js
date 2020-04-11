function convertNumToObj(num) {
    let str = num.toString();
    let res = {};
    for(var i = 0; i < str.length; i++){
        res[str[i]] = i;
    }
    return res;
};

function cowsAndBulls(guess, actual) {
    let guessObj = convertNumToObj(guess);
    let actualObj = convertNumToObj(actual);
    let res = { cows : 0, bulls : 0};
    for (let prop in actualObj) {
       if(guessObj.hasOwnProperty(prop)) {
            if(actualObj[prop] === guessObj[prop]) {
                res.bulls+=1;
            } else {
                res.cows+=1;
            }
        } 
    }
return res;
}

