import classes from "./Button.module.scss";

const Button = (props) => {
  const btnClickHandler = (e) => {
    console.log(props);
    props.btnClickHandler(e);
  };

  return (
    <>
      <button
        disabled={props.disable}
        className={`${classes.button} ${props.style}`}
        onClick={(e) => {
          btnClickHandler(e);
        }}
      >
        {props.btnText}
      </button>
    </>
  );
};

export default Button;
