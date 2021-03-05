const returnRange = (params) => {
  
  if (params > 75 || params == null) {
    return 2;
  } else if (params <= 75 && params >= 70) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = returnRange;
