import { input } from './input';
import { calcAvgSpeed } from './calcAvgSpeed';

// database will store all of the relevant data

export const parseDriverData = input => {
  let database = {};

  // used for-of because it allows break and continue.
  for (const line of input) {
    const [cmd, name, start, end, miles] = line.split(' '); // start end & miles are undefined when cmd == 'Driver'

    if (cmd === 'Driver') {
      database = { ...database, [name]: [] }; // add driver's name as a key in the database object.
    } else {
      const avgSpeed = calcAvgSpeed(miles, start, end);
      if (avgSpeed < 5 || avgSpeed > 100) continue; // Discard any trips that average a speed of less than 5 mph or greater than 100 mph.
      database[name] = [...database[name], ...[{ avgSpeed, miles }]]; // spread the new driver record into the driver that matches that name.
    }
  }

  for (const [name, trips] of Object.entries(database)) {
    // console.log(name, trips);
    if (trips.length > 1) {
      const cumulativeTrips = trips.reduce((prev, current) => {
        const [prevSpeed, prevMiles] = Object.values(prev);
        const [currSpeed, currMiles] = Object.values(current);
        const totalAvgSpeed = (prevSpeed + currSpeed) / trips.length;
        const totalMiles = parseFloat(prevMiles) + parseFloat(currMiles);
        return {
          totalAvgSpeed: Math.round(totalAvgSpeed),
          totalMiles: Math.round(totalMiles)
        };
      });
      const { totalMiles, totalAvgSpeed } = cumulativeTrips;
      console.log(`${name}: ${totalMiles} miles @ ${totalAvgSpeed} mph`);
      // console.log(cumulativeTrips);
    } else if (trips.length === 1) {
      const [{ miles, avgSpeed }] = trips;
      // console.log(miles, avgSpeed);
      console.log(`${name}: ${Math.round(miles)} miles @ ${Math.round(avgSpeed)} mph`);
    } else {
      console.log(`${name}: 0 miles`);
    }
  }
};

parseDriverData(input);
