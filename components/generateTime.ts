export const generateTime = (date: string) => {
  const then = new Date(date).getTime();
  const now = new Date().getTime();
  let out = "";
  let time = Math.round((now - then) / 86400000);
  if (time <= 1) {
    out = "Today";
  } else if (time < 7) {
    out = time + "  Days ago ";
  } else if (time / 7 < 4) {
    out = Math.round(time / 7) + " weeks ago";
  } else if (time / 31 < 12) {
    out = Math.round(time / 31) + " Months ago";
  } else {
    out = Math.round(time / 365) + " Years ago";
  }
  return out;
};

export const generateMonth = (date: string) => {
  const then = new Date(date);
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let out =
    then.getDate() + " " + Months[then.getMonth()] + "  " + then.getFullYear();

  return out;
};
