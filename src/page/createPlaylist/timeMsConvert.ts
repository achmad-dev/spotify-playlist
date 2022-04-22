export default function millisToMinutesAndSeconds(millis: number): string {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds;
}

/*
1. The first line of code, `var minutes = Math.floor(millis / 60000);`, finds the amount of minutes that have passed by dividing the amount of milliseconds by 60000. It then assigns the amount of minutes to a variable called `minutes`.
2. The second line of code, `var seconds  = ((millis % 60000) / 1000).toFixed(0);`, finds the amount of seconds that have passed by finding the remainder of the amount of milliseconds divided by 60000. It then assigns the amount of seconds to the variable `seconds`.
3. The third line of code, `return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;`, returns the amount of minutes and seconds that have passed. */
