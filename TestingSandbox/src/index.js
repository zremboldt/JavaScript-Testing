import { input } from './input';
import { calcAvgSpeed } from './calcAvgSpeed';

// database will store all of the relevant data
let database = {};

export const parseAndStoreDriverData = rawString => {
  // Parse/prep relevant data for storage.
  const parseDriverData = () => {
    const [cmd, name, start, end, miles] = rawString.split(' '); // start end & miles are undefined when cmd == 'Driver'
    if (cmd === 'Driver') return [cmd, name];
    if (cmd === 'Trip') {
      const tripAvgSpeed = calcAvgSpeed(miles, start, end);
      if (tripAvgSpeed < 5 || tripAvgSpeed > 100) return null; // Discard any trips that average a speed of less than 5 mph or greater than 100 mph.
      return [cmd, name, tripAvgSpeed, miles];
    }
  };

  // Store parsed data in database
  const [cmd, name, tripAvgSpeed, miles] = parseDriverData();
  if (cmd === 'Driver') database = { ...database, [name]: [] }; // add driver's name as a key in the database object.
  if (cmd === 'Trip') database[name] = [...database[name], ...[{ tripAvgSpeed, miles }]]; // spread the new driver record into the driver that matches that name.
};

// Feed sample data in one line at a time.
for (const line of input) {
  parseAndStoreDriverData(line);
}

//

//

// TODO:
// 1. Calculate each drivers cumulative trip stats.
// 2. Sort output by most miles driven

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
    const [{ miles, tripAvgSpeed }] = trips;
    // console.log(miles, avgSpeed);
    console.log(`${name}: ${Math.round(miles)} miles @ ${Math.round(tripAvgSpeed)} mph`);
  } else {
    console.log(`${name}: 0 miles`);
  }
}
