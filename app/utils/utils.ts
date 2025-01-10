export const trackPeriod = (value: string) => {
  const monthStarted = new Date(value);
  const now = new Date();
  const differenceInMilliseconds = now.getTime() - monthStarted.getTime();
  const millisecondsInAMonth = 30.44 * 24 * 60 * 60 * 1000;
  const monthPassed = differenceInMilliseconds / millisecondsInAMonth;
  return Math.floor(monthPassed);
};
