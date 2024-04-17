/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */


function isPalindrome(str) {
    str = str.toLowerCase();

    const str2 = str.split('').reverse().join('');
    if (str === str2) {
        return true;
    }
    else {
        return false;
    }
}


















































module.exports = isPalindrome