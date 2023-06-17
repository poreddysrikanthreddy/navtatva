export const getRatingClass = (ratings) => {
  console.log("ratings",ratings)
  if (ratings == 5) {
    return (["", "", "", "", ""])
  } else if (ratings > 4) {
    return (["", "", "", "", "-half"])
  } else if (ratings == 4) {
    return (["", "", "", ""])
  } else if (ratings > 3) {
    return (["", "", "", "-half"])
  } else if (ratings == 3) {
    return (["", "", ""])
  } else if (ratings > 2) {
    return (["", "", "-half"])
  } else if (ratings == 2) {
    return (["", ""])
  } else if (ratings > 1) {
    return (["", "-half"])
  } else if (ratings == 1) {
    return ([""])
  } else {
    return (["-half"])
  }
}
export const getDateFormated = (data) => {
  const months = [
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
  let newDate = new Date(data);
    return (
      months[newDate.getMonth()] +
      " " +
      newDate.getDate() +
      "," +
      newDate.getFullYear()
    );
}
