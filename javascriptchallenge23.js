function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}
function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make}
going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};
const tesla = new EV("Tesla", 120, 23);
console.log("Before acceleration:");
console.log(tesla);
tesla.accelerate();
console.log("After acceleration:");
console.log(tesla);
tesla.chargeBattery(90);
console.log("After charging:");
console.log(tesla);
