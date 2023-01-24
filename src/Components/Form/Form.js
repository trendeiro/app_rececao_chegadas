import Card from "../../UI/Card/Card";
import FooterSection from "./FooterSection/FooterSection";
import classes from "./Form.module.scss";
import InputSection from "./InputSection/InputSection";

const Form = () => {
  return (
    <div className={classes.FormContainer}>
      <Card title={"Recepção"}>
        <InputSection></InputSection>
        <FooterSection></FooterSection>
      </Card>
    </div>
  );
};

export default Form;
