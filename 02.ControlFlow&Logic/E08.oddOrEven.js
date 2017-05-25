function oddOrEven(number) {
    if(Math.abs(number)%2==0){
        console.log('even');
    }else if(Math.abs(number)%2==1){
        console.log('odd');
    }else{
        console.log('invalid');
    }
}

oddOrEven(10.4);
oddOrEven(15);
oddOrEven(-5);
oddOrEven(-40);