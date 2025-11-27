function isEven(n){
    if(n%2 == 0) {
        console.log('your score is even');
    }
    else {
        console.log('the number is odd');
    }
}

for (  let playerScore =0; playerScore < 10; playerScore++ ) {
    console.log( playerScore );
    isEven(playerScore);
}
