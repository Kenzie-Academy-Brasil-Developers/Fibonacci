// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');

function fibonacci(fibNum) {

    let fibNum1 = 0

    let fibNum2 = 1

    let result = 0

    for (counter = 0; fibNum >= result; counter = add(counter, 1)) {

        result = add(fibNum1, fibNum2)
        fibNum1 = fibNum2
        fibNum2 = result

    }

    return result

}

 console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');