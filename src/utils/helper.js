export const colorPicker = (rating) => {
  if (rating > 75) return "green.500";
  else if (rating > 50) return "yellow.400";
  else return "red.400";
};

export const textFix = (text) => {
  const result = text?.replace(/\n.*Español/, "")
  console.log(result)
  return result
};
