"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  console.log("======================================================");
  console.log("NOW THE DIE WILL ROLE ", sampleSize, "TIMES");
  for (let roll = 0; roll < sampleSize; roll++) {
    let pickNumber = Math.floor(Math.random() * 6) + 1;
    if (pickNumber == 1) {
      valueCounts[0]++;
    }
    if (pickNumber == 2) {
      valueCounts[1]++;
    }
    if (pickNumber == 3) {
      valueCounts[2]++;
    }
    if (pickNumber == 4) {
      valueCounts[3]++;
    }
    if (pickNumber == 5) {
      valueCounts[4]++;
    }
    if (pickNumber == 6) {
      valueCounts[5]++;
    }
    // console.log("first number is ", pickNumber);
  }
  let results = [];
  for (let x of valueCounts) {
    let eachPercentage = ((x / sampleSize) * 100).toFixed(2);

    results.push(eachPercentage);
  }

  for (let i = 0; i < valueCounts.length; i++) {
    console.log("The item ", i + 1, " is rolled ", valueCounts[i], "times!");
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (let x of sampleSizes) {
    let results = runExperiment(x);
    console.log("The percentage for each result is:");
    console.log(results, x);
  }
}

main();
