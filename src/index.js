module.exports = function warmup(fahrenheit) {

    if (typeof fahrenheit !== 'number') {
        throw new TypeError('Введите числовое значение');
    }

    return fahrenheit * 1.8 + 32;


};