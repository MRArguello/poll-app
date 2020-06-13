const calculatePercentage = (total: number, current: number) => {
  
  if (total === 0 ) {
    return 0
  }

  const calculatedPercentage = current*100/total;
  
  return +parseFloat(calculatedPercentage.toFixed(1));
};

export default calculatePercentage;
