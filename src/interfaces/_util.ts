type Optional<T> = {
  [k in keyof T]?: T[k];
};


function stringArrayToEnum(array: string[]): { [key: string]: string } {
  let enumObject: { [key: string]: string } = {};

  for (let str of array) {
    enumObject[str] = str;
  }

  return enumObject;
}