export default function (minutes: number): number {
  let meetUp = 0

  // oneCycle count
  const oneCycle = 360;
  const minuteTravelOneCycle = 60;
  const hourTravelOneCycle = 60 * 12;

  // cycle travel by minute and hour in given minutes
  const minuteTravelDegree = (oneCycle / minuteTravelOneCycle) * minutes;
  const hourTravelDegree = (oneCycle / hourTravelOneCycle) * minutes;

  if(minuteTravelDegree >= oneCycle) {
    // here we consider meetUp happens in each cycle and exclude the initial meetUp
    meetUp = Math.floor(minuteTravelDegree / oneCycle) - 1;

    // then see if there are any cycle left after a complete cycle
    const remain = minuteTravelDegree % oneCycle;
    const hourRemain = hourTravelDegree % oneCycle;
    
    // if the minute remain cycle is greater than hour remain, then we know meetUp has happened
    if (remain > hourRemain) {
      meetUp++;
    }    
    // finally we know in each 12 cycle, there will be 11 meetups. So, we reduce one for each 12 complete cycle
    meetUp -= Math.floor(meetUp / 12);
  }

  return meetUp;
}

