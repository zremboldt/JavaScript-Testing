import { input } from './input';
import { calcAvgSpeed } from './calcAvgSpeed';

// database will store all of the relevant data
let database = {};

export const parseDriverData = input => {
  for (const line of input) {
    const [cmd, name, start, end, miles] = line.split(' '); // start end & miles are undefined when cmd == 'Driver'

    if (cmd === 'Driver') {
      return [cmd, name];
    } else {
      const avgSpeed = calcAvgSpeed(miles, start, end);
      if (avgSpeed < 5 || avgSpeed > 100) continue; // Discard any trips that average a speed of less than 5 mph or greater than 100 mph.
      return [cmd, name, miles, avgSpeed];
    }
  }
};

parseDriverData(input);
// storeDriverData();

// if new Driver
// database = { ...database, [name]: [] }; // add driver's name as a key in the database object.
// else
// database[name] = [...database[name], ...[{ avgSpeed, miles }]]; // spread the new driver record into the driver that matches that name.

//

//

//

//

//

//

const trackDrivingHistory = data => {
  // console.log(database);
  // Generate a report containing each driver with total miles driven and average speed.
  // Sort the output by most miles driven to least.
  // Round miles and miles per hour to the nearest integer.

  let temp = [];

  for (const driverEntry of Object.entries(database)) {
    let entries = 0;
    let avgSpeed = 0;
    let miles = 0;
    const [name, records] = driverEntry;

    // const driverTotals = records.reduce((prev, current) => console.log(prev, current));

    records.forEach(record => {
      // console.log(record);
      entries++;
      avgSpeed += record.avgSpeed;
      miles += record.miles;
    });

    temp.push(name);
    temp.push(Math.round(avgSpeed / entries));
    temp.push(Math.round(parseInt(miles) / entries));
  }

  // console.log(temp);
  // console.log(records);
};

// trackDrivingHistory(input);

// export default trackDrivingHistory;
// {
//   Dan: [[34.6, '17.3'], [65.4, '21.8']],
//   Alex: [[33.6, '42.0']],
//   Bob: []
// };

const thisIsdatabaseAfterTheForOfLoop = {
  Dan: [{ avgSpeed: 34.6, miles: '17.3' }, { avgSpeed: 65.40000000000006, miles: '21.8' }],
  Alex: [{ avgSpeed: 33.6, miles: '42.0' }],
  Bob: []
};
