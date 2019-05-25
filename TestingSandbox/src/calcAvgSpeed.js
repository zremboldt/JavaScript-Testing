// convert a timestamp, 07:15, to hours, 7.25.
export const convertTimeToHours = time => {
  const [hours, minutes] = time.split(':');
  return minutes / 60 + parseInt(hours); // parseInt hours otherwise the `+` will concatenate.
};

// calculate how long the trip lasted.
export const totalDriveTime = (driveStart, driveEnd) => {
  return convertTimeToHours(driveEnd) - convertTimeToHours(driveStart);
};

// calculate the average speed for a trip.
export const calcAvgSpeed = (milesDriven, driveStart, driveEnd) => {
  return milesDriven / totalDriveTime(driveStart, driveEnd);
};
