var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

var buzzer = 4;


var beep = function(count) {
    setTimeout(() => {
        gpiop.write(buzzer, true);
        setTimeout(() => {
            gpiop.write(buzzer, false);

            if (count > 1) {
                beep(count - 1);
            }

        }, 500);
    }, 500);
}





var setup = () => {
    return new Promise((resolve, reject) => {

        gpiop.setup(buzzer, gpio.DIR_OUT)
            .then(() => {
                beep(2);
            })
            .catch((err) => {
                console.log('Error: ', err.toString())
            });


    });

}


var run = () => {

}



setup().then(() => {

});