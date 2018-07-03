/**
 * Primer ejemplo de código "sincrono"
 */
console.log('this will fire first');
console.log('this will fire second');
console.log('this will fire last');

/**
 * Entonces, un Callback Salvaje Aparece
 */
console.log('this will fire first');
setTimeout(() => {
    console.log('this will fire second');
}, 500);
console.log('this will fire last');


/**
 * Pero está medio feo así, porque nuestro código no es
 * tan reutilizable, por lo tanto, podemos generar nuestra
 * propia función con un callback
 */
function wait(ms, cb) {
    setTimeout(function() {
        console.log(`done after ${ms}ms`);
        cb();
    }, ms);
};

wait(1000, function() {
    console.log('here\'s our callback function');
});


/**
 * Entonces si quisiera conseguir un resultado como el inicial...
 * 
 * CALLBACK HELLL!!!!!!!!!!!
 */

wait(300, function() {
    wait(600, function() {
        wait(500, function() {
            wait(400, function() {
                console.log('here\'s our final callback function');
            });
        });
    });
});


/**
 * Para evitar ese problema masivo, se crearon las Promesas
 * y entonces podemos simular/obtener un resultado similar con lo siguiente
 */
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(`waited for ${ms}ms`));
        }, ms);
    });
}

//Pero aun así estamos 'encadenando' cada resultado con el anterior
wait(300)
    .then(res => wait(500))
    .then(res => wait(1000))
    .then(res => wait(700))
    .then(res => wait(300))
    .then(res => wait(900))
    .catch(err => console.error(err));


/**
 * Aquí es donde llega Async/await al rescate!
 * 
 * Ahora, aguas! await solo jala si la funcion donde
 * será usada está declarada con un async
 */
const go = async () => {
    await wait(600);
    await wait(1200);
    await wait(1800);
}
go();

/**
 * Podemos incluso asignar el valor de nuestro return
 * a una varuable para usarlo posteriormente
 */
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`waited for ${ms}ms`); //Aqui cambió!
        }, ms);
    });
}

const go = async () => {
    const res1 = await wait(600);
    console.log(res1);
    const res2 = await wait(1000);
    console.log(res2);
    const res3 = await wait(1400);
    console.log(res3);
};
go();


/**
 *  Para el manejo de errores/excepciones es incluso mas limpio/fácil
 */
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms > 500) {
                resolve(`waited for ${ms}ms`);
            } else {
                reject(Error(`you should wait longer than ${ms}ms!`));
            }
        }, ms);
    });
}

const go = async () => {
    try {
        const res1 = await wait(600);
        console.log(res1);
        const res2 = await wait(600);
        console.log(res2);
        const res3 = await wait(300);
        console.log(res3);
        const res4 = await wait(600);
        console.log(res4);
    } catch (err) {
        console.error('something went wrong...', err);
    }
}
go();