function*iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(["Anyilo", "Jesús", "Ramona", "Hector"])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);