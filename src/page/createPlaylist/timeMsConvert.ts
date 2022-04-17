export default function millisToMinutesAndSeconds(millis : number) : string {
    var minutes = Math.floor(millis / 60000);
    var seconds  = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
  }