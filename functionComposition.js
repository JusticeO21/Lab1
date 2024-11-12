const filterEven = arr => {
    return arr.filter(num => num % 2 !== 0);
};

const sum = arr => {
    return arr.reduce((acc, num) => acc + num, 0);
};

function compose() {
    var fns = arguments;
    return function(arr) {
        return fns.reduce((v, f) => {
            return f(v);
        }, arr);
    };
}

var doubledOddNumbers = compose(filterEven, sum)(numbers);
