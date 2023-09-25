const calculator = (function(){
    function add(a,b){
        return a+b;
    }
    function subtract(a,b){
        return a-b
    }
    function multiply(a,b){
        return a*b
    }
    function division(a,b){
        return a/b;
    }
    return {
        add,
        subtract,
        multiply,
        division
    }
})()

export default calculator;