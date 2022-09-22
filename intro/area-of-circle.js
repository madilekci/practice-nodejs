/*
    Area of a circle is r^2 multiplied by pi number 
    We will use 3.14 instead of actual pi number in this example
*/

function calcArea(r){
    pi = 3.14;
    area = pi * r**2;
    return area;
}

const radius = process.argv.slice(2);

area = calcArea(radius);

console.log("Area of the circle is : ",area);