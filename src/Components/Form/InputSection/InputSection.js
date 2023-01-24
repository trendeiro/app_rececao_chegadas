import Input from "../../../UI/Input/Input";

const InputSection = () => {
  return (
    <section className="inputSection">
      <Input inputLable="Data dia" type={"date"} />
      <Input inputLable="Entregador" type={"text"} />
      <Input inputLable="Quantidade" type={"number"} />
      <Input inputLable="Tipo" type={"text"} />
      <Input inputLable="Designação" type={"text"} />
      <Input inputLable="Hora" type={"time"} />
    </section>
  );
};

export default InputSection;
