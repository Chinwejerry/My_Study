//let yourName = prompt("Enter your name");
//let partnersName = prompt ("Enter your partners name")
function loveCalculator(){
    let loveScore = Math.random()*100;
    let allScore = Math.floor(loveScore);

    if (allScore < 30){
        console.log( "your love score is "+ allScore + " % find another love");
    }
    else if (allScore > 70 ){
        console.log( "your love score is "+ allScore + " % you are both in love");

    }
    else {
        console.log( "your love score is "+ allScore);
    }
}

loveCalculator();
