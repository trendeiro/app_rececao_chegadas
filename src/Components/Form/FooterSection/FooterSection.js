import classes from "./FooterSection.module.scss";
import Button from "../../../UI/Button/Button";

const FooterSection = () => {
  return (
    <section className={classes.footerSection}>
      <Button btnText={"Guardar"} style={classes.btnGuardar} />
      <Button btnText={"Cancelar"} style={classes.btnCancelar} />
    </section>
  );
};

export default FooterSection;
