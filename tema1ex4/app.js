
function getFibonacci(n) {
    if (typeof n !== "number" || n < 1 || n > 10) {
        return "not allowed";}
        if(n===1){
            return 1;
        }
     if (n === 2) {
        return [1, 1];}
    if(n==5)
    var fibonacci = [1, 1];
     for (var i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];}
    return fibonacci;
}

