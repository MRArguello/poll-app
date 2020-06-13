// I could use Moment.js or other libraries for this but since its a small app I didn't want to add too many dependencies

const formatDate = (date: string) => {

  const formattedDate: string = new Date(date).toLocaleString();

  if (formattedDate === 'Invalid Date') {
    return date;
  }

  return formattedDate;
};

export default formatDate;
