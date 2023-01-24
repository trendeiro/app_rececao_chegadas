import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <>
      <button className={`${classes.button} ${props.style}`}>
        {props.btnText}
      </button>
    </>
  );
};

export default Button;
