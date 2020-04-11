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

function generateNumForGame() {
    let n;
    let temp = [];
    while(temp.length !== 3) {
        temp = [];
        n = Math.floor(Math.random()*(999-100+1)+100);
        let arr = n.toString().split('');
        arr.forEach(val => {
            if(temp.indexOf(val) === -1) temp.push(val);
        });
    }
    return n;
}

let gamePlay = (function() {
    let count = 0;
    let actual = generateNumForGame();
    let res = { cows : 0, bulls : 0};
    return function* (guess) {
        res = cowsAndBulls(guess, actual);
        while(res.bulls !== 3) {
            count++;
            yield res;
        }
        return `You won in ${count} attempts!`;
    }
})();

function playCowsAndBulls(guess) {
    return gamePlay(guess).next().value;
}
