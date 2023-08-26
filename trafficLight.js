"use strict";
/**
 * The `trafficLight` object is now no longer a global variable. Instead,
 * it is defined in function `main()` and passed as a parameter to other
 * functions, as and when needed.
 */

function getCurrentState(trafficLight) {
  // TODO
  if (trafficLight === "green") {
    trafficLight = "green";
  } else if (trafficLight === "orange") {
    trafficLight = "orange";
  } else if (trafficLight === "red") {
    trafficLight = "red";
  }
  return trafficLight;
}

function getNextStateIndex(trafficLight) {
  // TODO
  // Return the index of the next state of the `trafficLight` such that:
  let currentS = getCurrentState();
}
function waitSync(secs) {
  const start = Date.now();

  while (Date.now() - start < secs * 1000) {
    // nothing do to here
    // WHY THIS SYNTAX
  }
}
function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 3; cycle++) {
    const currentState = getCurrentState(trafficLight.possibleStates[cycle]);
    console.log(cycle, "The traffic light is now", currentState);
    // console.log(
    //   cycle,
    //   "The traffic light is now",
    //   trafficLight.possibleStates[cycle]
    // );

    waitSync(1); // Wait a second before going to the next state
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
/**
 * The output should be:

0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red

*/
