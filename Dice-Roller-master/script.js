function fun()
{
    var x = Math.floor(Math.random()*(6)+1);
    document.getElementById("dice").src = "./assets/"+x+".png";
}

function fun1()
{
    document.getElementById("dice").src = './assets/dice-roll.gif';
    setTimeout(fun,1000);
}