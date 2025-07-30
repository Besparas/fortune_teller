const gennr = () => {                       // generates a random number between 0 and 2
    return Math.floor(Math.random()*3);
}

const output = (nmb) => {                     // returns a random message 

    switch (nmb) {
        case 0:
            return "A new opportunity will soon present itself — be ready to act quickly.";
            break;
        case 1:
            return "Patience now will bring great rewards in the near future.";
            break;
        case 2:
            return "Someone you admire will soon recognize your efforts.";
            break;
    }
}

console.log(output(gennr())); 