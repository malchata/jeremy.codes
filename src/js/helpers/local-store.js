export default (action, key, value, overwrite = false) => {
  if ("localStorage" in window) {
    if (action === "set") {
      if (overwrite === false && localStorage.getItem(key) !== null) {
        localStorage.setItem(key, `${localStorage.getItem(key)},${value}`);
      } else {
        localStorage.setItem(key, value);
      }

      return true;
    } else {
      return localStorage.getItem(key);
    }
  }

  return false;
};
