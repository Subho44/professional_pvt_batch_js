//mutiple cards print using loop

const products = [
    {name:"Laptop", price:10000},
    {name:"Phone", price:24000}
];
//top border
let top = "";
products.forEach(()=>top += "+-----------+   ");
console.log(top);

//names
let names = "";
products.forEach(p=> names += `| ${p.name.padEnd(10)} |  `);
console.log(names);

//prices
let prices = "";
products.forEach(p=> prices += `| ${p.price.toString().padEnd(9)} |  `);
console.log(prices);

//bottom
let bottom = "";
products.forEach(()=>bottom += "+-----------+   ");
console.log(bottom);