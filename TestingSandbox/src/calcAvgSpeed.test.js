import { convertTimeToHours, totalDriveTime, calcAvgSpeed } from './calcAvgSpeed';

test('Convert timestamp to hours', () => {
  expect(convertTimeToHours('13:15')).toBe(13.25);
  expect(convertTimeToHours('07:45')).toBe(7.75);
});

test('Calculate drive time', () => {
  expect(totalDriveTime('07:15', '07:45')).toBe(0.5);
  expect(totalDriveTime('12:01', '13:16')).toBe(1.25);
});

// calcAvgSpeed takes: milesDriven, driveStart, driveEnd
test('Calculate average speed', () => {
  expect(calcAvgSpeed(42.0, '12:01', '13:16')).toBe(33.6);
});
