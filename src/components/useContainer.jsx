import { useState } from "react";

var arrObj = [];
export default function useContainer() {
  const [value, setValue] = useState("");

  const handleInput = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    arrObj = [];

    let arr = value.split("/");
    arr = arr.map((value) => Number(value));

    const arrWidth = [];
    let i = 0;
    for (i in arr) {
      if (arr[i] === 1) {
        arrWidth.push("100%");
      } else {
        const width = 100 / arr[i] + "%";
        for (let j = 0; j < arr[i]; j++) {
          arrWidth.push(width);
        }
      }
    }

    arrWidth.map((value, index) => {
      arrObj.push({ id: ++index, width: value });
    });
    console.log(arrObj);

    setValue("");
  };

  const handleEnter = (e) => (e.which === 13 ? handleSubmit() : null);

  return {
    arrObj,
    value,
    handleInput,
    handleSubmit,
    handleEnter,
  };
}
