import { useCallback } from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
  const handleInputChange = useCallback(
    (e) => {
      props.onChange(e);
    },
    [props]
  );

  return (
    <>
      <label className={classes.inputLable} htmlFor={props.inputLable}>
        {props.inputLable}
      </label>
      <input
        id={props.inputLable}
        className={classes.inputClass}
        onChange={(e) => handleInputChange(e)}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
      ></input>
    </>
  );
};

export default Input;
