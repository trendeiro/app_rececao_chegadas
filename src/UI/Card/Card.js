import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_header}>
        <h1 className={classes.headerCard}>{props.title}</h1>
      </div>
      <div className={classes.main}>{props.children}</div>
    </div>
  );
};

export default Card;
