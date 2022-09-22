let pi = 3.14;

function area(r){
    area = pi * r**2;
    return area;
}

function circumference(r){
    crc = 2 * pi * r;
    return crc; 
}

module.exports = {
    area,
    circumference
}