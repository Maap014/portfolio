export const trackPeriod = (value: string) => {
  const monthStarted = new Date(value);
  const now = new Date();
  const monthsInAYear = 12;
  const differenceInMilliseconds = now.getTime() - monthStarted.getTime();
  const millisecondsInAMonth = 30.44 * 24 * 60 * 60 * 1000;
  const monthPassed = differenceInMilliseconds / millisecondsInAMonth;
  if (monthPassed >= 12 && monthPassed < 24) {
    const preiod = monthPassed / monthsInAYear;
    return `${Math.floor(preiod)} YEAR`;
  } else if (monthPassed >= 24) {
    const preiod = monthPassed / monthsInAYear;
    return `${Math.floor(preiod)} YEARS`;
  } else return `${Math.floor(monthPassed)} MONTHS`;
};
