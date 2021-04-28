// 1
function printodds(){
    for(var i=1; i<=20; i+=2)
    {
        console.log(i);
    }
}
printodds();

// 2
for(var i=4; i>-4; i-=1.5){
    console.log(i);
}

// 3 
var sum = 0;
function printsum(){
    for(var i=1; i<=100; i++) {
        sum = sum + i
        console.log(sum);
    }
}
printsum();


// 4
function factorialize() {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num = num * i; 
        }
    return num;
}
factorialize(10);