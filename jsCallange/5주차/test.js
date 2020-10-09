// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const title = document.querySelector("h2");
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const d = new Date();
  const differTime = (((xmasDay - d) / NINE_HOURS_MILLISECONDS) * 9) / 24;
  const date = parseInt(differTime);
  const hour = (differTime - parseInt(differTime)) * 24;
  const minute = (hour - parseInt(hour)) * 60;
  const second = (minute - parseInt(minute)) * 60;

  const pHour = parseInt(hour);
  const pMinute = parseInt(minute);
  const pSecond = parseInt(second);

  title.innerText = `${date < 10 ? `0${date}` : date}d ${
    pHour < 10 ? `0${pHour}` : pHour
  }h ${pMinute < 10 ? `0${pMinute}` : pMinute}m ${
    pSecond < 10 ? `0${pSecond}` : pSecond
  }s`;
}

init();

function init() {
  getTime();
  setInterval("getTime()", 1000);
}
