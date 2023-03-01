// while e do while - Estrura de repetição
    function random (min, max){
        const  r = Math.random() * (max-min) + min;
        return Math.floor(r);
    }
    const min = 1;
    const max = 50
    let rand = random(min,max);

console.log('inciando o while');

    while (rand !== 10){
        rand = random(min,max);
        console.log(rand);
    }
console.log('inciando o do while');

    do {
        rand = random(min,max);
        console.log(rand);
    }while(rand !== 10);