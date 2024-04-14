const currentTime = (date) => {
  const now = new Date(date);
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Month is zero-based (0 is January)
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();

  const fullDate = `
   ${day}/${month}/${year} - ${hours}:${minutes}
   `;
  return fullDate;
};

export default currentTime;
