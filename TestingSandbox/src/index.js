import { input } from './input';
import { parseDriverData } from './parseDriverData';

// Database will store all of the relevant driver and trip data
let database = {};

export const parseAndStoreDriverData = rawString => {
  // Parse/prep relevant data for storage.
  const [cmd, name, tripAvgSpeed, miles] = parseDriverData(rawString);

  // Store parsed data in database
  if (cmd === 'Driver') database = { ...database, [name]: [] }; // add driver's name as a key in the database object.
  if (cmd === 'Trip') database[name] = [...database[name], ...[{ tripAvgSpeed, miles }]]; // spread the new driver record into the driver that matches that name.
};

// Feed sample data in to be parsed and stored one line at a time.
input.forEach(line => parseAndStoreDriverData(line));

//

// TODO:
// 1. Calculate each drivers cumulative trip stats.
// 2. Round to the nearest integer.
// 3. Sort list by most miles driven and output.

const calcCumulativeStats = () => {
  let cumulativeStats = [];

  for (const [name, trips] of Object.entries(database)) {
    // if there's more than one trip, calculate cumulative totalMiles and totalAvgSpeed
    if (trips.length > 1) {
      let totalMiles = 0;
      let totalSpeed = 0;

      for (const { tripAvgSpeed, miles } of trips) {
        totalSpeed += tripAvgSpeed;
        totalMiles += parseFloat(miles);
      }

      // Find the driver's average speed
      let totalAvgSpeed = totalSpeed / trips.length;

      // Round totals to the nearest integer
      totalAvgSpeed = Math.round(totalAvgSpeed);
      totalMiles = Math.round(totalMiles);

      // Store in cumulativeStats array
      cumulativeStats = [...cumulativeStats, ...[[name, totalAvgSpeed, totalMiles]]];
    } else if (trips.length === 1) {
      const [{ miles, tripAvgSpeed }] = trips;

      // Round totals to the nearest integer
      const totalAvgSpeed = Math.round(tripAvgSpeed);
      const totalMiles = Math.round(miles);

      // Store in cumulativeStats array
      cumulativeStats = [...cumulativeStats, ...[[name, totalAvgSpeed, totalMiles]]];
    } else {
      // Store in cumulativeStats array
      cumulativeStats = [...cumulativeStats, ...[[name, 0, 0]]];
    }
  }

  // Sort list by most miles driven
  const sortedDrivingStats = cumulativeStats.sort((a, b) => b[2] - a[2]);

  // Output formatted data
  sortedDrivingStats.forEach(driver => {
    const [name, totalAvgSpeed, totalMiles] = driver;
    if (totalMiles > 0) console.log(`${name}: ${totalMiles} miles @ ${totalAvgSpeed} mph`);
    if (totalMiles === 0) console.log(`${name}: ${totalMiles} miles`);
  });
};

calcCumulativeStats();
