// I could use Moment.js or other libraries for this but since its a small app I didn't want to add too many dependencies

const calculatePercentage = (total: number, current: number) => {
  const calculatedPercentage = current*100/total;
  
  return `${+parseFloat(calculatedPercentage.toFixed(1))}%`;
};

export default calculatePercentage;
