
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
  };
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers)); 

console.log(selectingDrivers[0](drivers)); 
console.log(selectingDrivers[1](drivers)); 

const doubler = fareDoubler(10);
console.log(doubler); 

const tripler = fareTripler(10);
console.log(tripler); 

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Amari', 'Mo']
