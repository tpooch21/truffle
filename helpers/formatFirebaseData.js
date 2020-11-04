export const formatJSON = (obj) => {
  return Object.keys(obj).map((key) => ({
    ...obj[key],
    key,
  }));
};
