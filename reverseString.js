function reverseString(str){
    return str.split('').reduce((acc,cur) => cur+acc,'');
}

export default reverseString;