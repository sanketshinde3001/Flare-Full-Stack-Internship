// Create a function calculateArea that takes the radius of a circle as a parameter, calculates its area, and then logs the result. Declare a variable radius and call the function with this variable.

function calculateArea(r) {
    const area  = Math.PI * r * r;
    console.log(area);
}

const radius = 5;
calculateArea(radius);