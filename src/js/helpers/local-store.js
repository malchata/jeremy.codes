export default (action, key, value, overwrite = false) => {
  if ("localStorage" in window === false) {
    return false;
  }

  if (action === "set") {
    let valueToSet = overwrite === false && localStorage.getItem(key) !== null ? `${localStorage.getItem(key)},${value}` : value;
    localStorage.setItem(key, value);
    return true;
  }

  return localStorage.getItem(key);
};
