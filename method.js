export function daraja(num) {
    return num ** 2;
}


export function sumPositive(arr) {
    let newarr = [];
    for (const el of arr) {
        el > 0 ? newarr.push(el) : 0
    }
    return newarr
}


export function even(input) {
    let newarr1 = []
    for (const el of input) {
        !(el % 2) ? newarr1.push(el) : 0
    }
    return newarr1
}

export function odd(input) {
    let newarr2 = []
    for (const el of input) {
        el % 2 ? newarr2.push(el) : 0
    }
    return newarr2
}


export function negative(negativeArr) {
    let newNegativeArr = [];
    for (const el of negativeArr) {
        el < 0 && newNegativeArr.push(el)
    }
    return newNegativeArr
}


export function truthy(truthyArr) {
    let newTruthyArr = []
    for (const el of truthyArr) {
        el && newTruthyArr.push(el)
    }

    return newTruthyArr
}

export function falsy(falsyArr) {
    let newFalsyArr = []
    for (const el of falsyArr) {
        el || newFalsyArr.push(el)
    }

    return newFalsyArr
}

export function revesedNumber(number) {
    number = number + "";
    return +number.split("").reverse().join("")
}


export function summation(summationNum) {
    let summation = 0;
    for (let i = 0; i <= summationNum; i++) {
        summation += i;
    }
    return summationNum > 0 ? summation : "Musbat son kiriting";

}


export function kattaKichik(str) {
    let newStr = "";
    for (let i = 1; i < str.length / 2; i++) {
        newStr += str[2 * i - 1].toLowerCase() + str[2 * i].toUpperCase()
    }
    return str[0].toUpperCase() + newStr + str[str.length - 1].toLowerCase()
}


