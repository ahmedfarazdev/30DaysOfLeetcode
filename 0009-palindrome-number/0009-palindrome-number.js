/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    
    //x <0 check if it is less than 0 or a negative number
    // this we know that negative cannot be palindrom
    
    //x.torstring() converts it to string like from 123 t0 '123'
    //.split('') makes it array of ['1', '2', '3']
    //.reverse is an array function to reverse ['3','2','1']
    //.join() makes it '321'
    // + converts it to number again '321' becoms 321
    
    // x === +x.toString().split('').reverse().join('')
    // will return true or false
    
   return x < 0 ? false : x === +x.toString().split('').reverse().join('')
};