import { useEffect } from "react";
import { useSelector } from "react-redux";
import { InputCreation } from "../JavaScript/InputFunc_aux";

const InputSection = (props) => {
  const sendForm = useSelector((state) => state.form.form.sendForm);
  const { deliver, quantaty, type, design } = InputCreation();

  useEffect(() => {
    if (sendForm) {
      console.log(deliver.props.value);
      console.log(quantaty.props.value);
      console.log(type.props.value);
      console.log(design.props.value);
    }
  }, [sendForm, deliver, quantaty, type, design]);

  console.log(sendForm);

  return (
    <section className="inputSection">
      {deliver}
      {quantaty}
      {type}
      {design}
    </section>
  );
};

export default InputSection;
