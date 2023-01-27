import classes from "./FooterSection.module.scss";
import Button from "../../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../Store/Slice/Form/Form-slice";

const FooterSection = (props) => {
  const dispatch = useDispatch();
  const resetForm = useSelector((state) => state.form.resetForm);
  const isValidForm = useSelector((state) => state.form.form.formValid);
  const cancelBtnHandler = () => {
    resetForm();
  };

  const confirmationBtnHandler = () => {
    dispatch(formActions.sendForm(true));
  };

  return (
    <section className={classes.footerSection}>
      <Button
        btnText={"Guardar"}
        style={classes.btnGuardar}
        disable={!isValidForm}
        btnClickHandler={() => {
          confirmationBtnHandler();
        }}
      />
      <Button
        btnText={"Cancelar"}
        style={classes.btnCancelar}
        btnClickHandler={() => {
          cancelBtnHandler();
        }}
        disable={false}
      />
    </section>
  );
};

export default FooterSection;
