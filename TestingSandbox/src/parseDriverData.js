import { calcAvgSpeed } from './calcAvgSpeed';

// Parse/prep relevant data for storage.
export const parseDriverData = rawString => {
  const [cmd, name, start, end, miles] = rawString.split(' '); // start end & miles are undefined when cmd == 'Driver'
  if (cmd === 'Driver') return [cmd, name];
  if (cmd === 'Trip') {
    const tripAvgSpeed = calcAvgSpeed(miles, start, end);
    if (tripAvgSpeed < 5 || tripAvgSpeed > 100) return null; // Discard any trips that average a speed of less than 5 mph or greater than 100 mph.
    return [cmd, name, tripAvgSpeed, miles];
  }
};
