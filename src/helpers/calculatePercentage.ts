const calculatePercentage = (total: number, current: number) => {
  const calculatedPercentage = current*100/total;
  
  return `${+parseFloat(calculatedPercentage.toFixed(1))}%`;
};

export default calculatePercentage;
