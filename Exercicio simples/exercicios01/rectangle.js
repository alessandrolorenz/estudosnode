module.exports = (x, y, callback) => {
    
    if(x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Must be greater than zero, val 1= " + x + "val 2= " + y), null),2000);
    else
        setTimeout(() => 
        callback(null, {
            perimeter: () => (2*(x + y)),
            area: () => (x*y)
        }),
        2000)
}