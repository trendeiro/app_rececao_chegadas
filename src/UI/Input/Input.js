import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <>
      <label className={classes.inputLable} htmlFor={props.inputLable}>
        {props.inputLable}
      </label>
      <input
        id={props.inputLable}
        className={classes.inputClass}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
      ></input>
    </>
  );
};

export default Input;
