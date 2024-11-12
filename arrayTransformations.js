const double = arr => {
    return arr.map(num => num * 2);
};


const filterEven = arr => {
    return arr.filter(num => num % 2 !== 0);
};

const sum = arr => {
    return arr.reduce((acc, num) => acc + num, 0);
};

const average = arr => {
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
};
