// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  // Define logic here, e.g., HQ is on 42nd street
  const hqLocation = 42;
  return Math.abs(someValue - hqLocation);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    return 0; // Free sample
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; // Flat rate for distances over 2000 feet
  } else {
    return "cannot travel that far";
  }
}