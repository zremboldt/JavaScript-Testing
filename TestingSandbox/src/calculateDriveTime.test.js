import { convertToHours, driveTime } from './calculateDriveTime';

test('Convert timestamp to hours', () => {
  expect(convertToHours('13:15')).toBe(13.25);
  expect(convertToHours('07:45')).toBe(7.75);
});

test('Calculate drive time', () => {
  expect(driveTime('07:15', '07:45')).toBe(0.5);
  expect(driveTime('12:01', '13:16')).toBe(1.25);
});
