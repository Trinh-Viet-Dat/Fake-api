
const CHARSET = {
    UPSERCASE: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHABET: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    NUMBER: '0123456789'
}

function randomString(length, chars) {
    const result = [];
    const len = chars.length;
    for (let i = length; i > 0; --i) {
        result[i] = chars[Math.floor(Math.random() * len)];
    }
    return result.join('');
}

function randomInt(max){
    return Math.floor(Math.random()*max)
}

const uppercase = (l = 8) => randomString(l, CHARSET.UPSERCASE);
const alphabet = (l = 8) => randomString(l, CHARSET.ALPHABET);
const number = (l = 8) => randomString(l, CHARSET.NUMBER);

module.exports = {
    uppercase, alphabet, number,randomInt
}
