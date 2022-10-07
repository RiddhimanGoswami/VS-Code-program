function errorhandling(a) {
    let res;
    try{
    res = 5/a;
    }
    catch(E){
       res = 0
    }
    return res;
}
var A = 0
console.log(errorhandling("A"))