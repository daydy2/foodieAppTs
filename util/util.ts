import { DateTime } from "../types/type";

export const getTimeAndDate = (): DateTime => {
  const now = new Date();

  let hours = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const amOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formattedTime = `${hours.toString().padStart(2, "0")}:${String(
    min
  )} ${amOrPm}`;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[now.getMonth()];

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  return { time: formattedTime, date: formattedDate, hours: hours };
};
