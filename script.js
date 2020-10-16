slowMath.add(6, 2)
    .then((result) => {
        console.log(result)
        return slowMath.multiply(result, 2)
    }).then((result) => {
        console.log(result)
        return slowMath.divide(result, 4)
    }).then((result) => {
        console.log(result)
        return slowMath.subtract(result, 3)
    }).then((result) => {
        console.log(result)
        return slowMath.add(result, 98)
    }).then((result) => {
        console.log(result)
        return slowMath.remainder(result, 2)
    }).then((result) => {
        console.log(result)
        return slowMath.multiply(result, 50)
    }).then((result) => {
        console.log(result)
        return slowMath.remainder(result, 40)
    }).then((result) =>{
        console.log(result)
        return slowMath.add(result, 32)
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });

async function doMath(a, b) {
    try {
        let math = await slowMath.add(a, b)
        console.log(math)
        math = await slowMath.multiply(math, 2)
        console.log(math)
        math = await slowMath.divide(math, 4)
        console.log(math)
        math = await slowMath.subtract(math, 3)
        console.log(math)
        math = await slowMath.add(math, 98)
        console.log(math)
        math = await slowMath.remainder(math, 2)
        console.log(math)
        math = await slowMath.multiply(math, 50)
        console.log(math)
        math = await slowMath.remainder(math, 40)
        console.log(math)
        math = await slowMath.add(math, 32)
        console.log(math)
    } catch (error) {
        console.log(error)
    }
};
doMath(6, 2);
