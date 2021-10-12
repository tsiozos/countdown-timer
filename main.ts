

let startTime = 20; //global var

input.onButtonPressed(Button.AB, function() {
    for (let i=startTime; i>=0; i--) {  //use the global var
        showSmallNumber(i);
        basic.pause(500);
    }
})