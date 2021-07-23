export const sorting = (objs, key, asc) => {
  return objs.sort((a, b) => (asc ? a[key] - b[key] : b[key] - a[key]));
};
