var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

var buzzer = 4;


var setup = () => {
    return new Promise((resolve, reject) => {

        gpiop.setup(buzzer, gpio.DIR_OUT)
            .then(() => {
                gpiop.write(buzzer, true)
                gpiop.write(buzzer, false)
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