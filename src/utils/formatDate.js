const formatDate = (date) => {
  const dateObj = new Date(date);
  let month = `${dateObj.getMonth() + 1}`;
  let day = `${dateObj.getDate()}`;
  const year = `${dateObj.getFullYear()}`;

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }
  return [year, month, day].join("-");
};

export default formatDate;
