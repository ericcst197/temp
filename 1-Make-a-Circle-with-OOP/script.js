class Circle {
  constructor(radius) {
    this.radius = radius
  }

  // Write code here
  getArea() {
    return Math.PI * this.radius * this.radius
  }
  
  getCircumference() {
    return 2 * Math.PI * this.radius
  }
}


const circle1 = new Circle(1);
// Test Cases - Uncomment the next line to run the test cases
/*
const circle1 = new Circle(1);
console.log(circle1.radius === 1); // Should log true
console.log(circle1.getArea() === 3.141592653589793); // Should log true
console.log(circle1.getCircumference() === 6.283185307179586); // Should log true
*/
console.log(circle1.radius === 1); // Should log true
console.log(circle1.getArea() === 3.141592653589793); // Should log true
console.log(circle1.getCircumference() === 6.283185307179586); // Should log true