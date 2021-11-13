export const updateObjectInArray = (items, propValue, objPropName, newObjProps) => {
  return items.map((item) => {
    if (item[objPropName] === propValue) {
      return {...item, ...newObjProps};
    }
    return item;
  })
};
