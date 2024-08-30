let t = 1.44;
let r1 = 7000;
let r2 = 2000;
let ct = 47e-9;

let f = t/((r1+(2*r2))*ct);

console.log(f);

let measuredPeriod = 359.677e-6;

let calcFrequency = 1/measuredPeriod;

console.log(calcFrequency);