// Takes in a time string, splits it and converts it to hours.
// Example input: 07:15
// Example output: 7.25
export const convertToHours = time => {
  const [hours, minutes] = time.split(':');
  console.log(hours, minutes);
  return minutes / 60 + parseInt(hours); // parseInt hours otherwise the `+` will concatenate.
};

// calculate how long the drive lasted.
export const driveTime = (driveStart, driveEnd) => {
  return convertToHours(driveEnd) - convertToHours(driveStart);
};
