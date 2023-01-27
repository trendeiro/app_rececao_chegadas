import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../../Hooks/use-input";
import { formActions } from "../../../Store/Slice/Form/Form-slice";
import Input from "../../../UI/Input/Input";

export function InputCreation(props) {
  const dispatch = useDispatch();
  const functionReset = useSelector((state) => state.form.resetForm);

  const {
    value: deliver,
    hasError: deliverHasError,
    isValid: deliverIsValid,
    valueChangeHandler: deliverChangeHandler,
    inputBlurHandler: deliverBlurHandler,
    reset: resetDeliverInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: quant,
    hasError: quantHasError,
    isValid: quantIsValid,
    valueChangeHandler: quantChangeHandler,
    inputBlurHandler: quantBlurHandler,
    reset: resetQuantInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: type,
    hasError: typeHasError,
    isValid: typeIsValid,
    valueChangeHandler: typeChangeHandler,
    inputBlurHandler: typeBlurHandler,
    reset: resetTypeInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: design,
    hasError: designHasError,
    isValid: designIsValid,
    valueChangeHandler: designChangeHandler,
    inputBlurHandler: designBlurHandler,
    reset: resetDesignInput,
  } = useInput((value) => value.trim() !== "");

  useEffect(() => {
    if (deliverIsValid && quantIsValid && typeIsValid && designIsValid) {
      dispatch(formActions.validateForm(true));
    }
  }, [dispatch, deliverIsValid, quantIsValid, typeIsValid, designIsValid]);

  const resetForm = useCallback(() => {
    resetDeliverInput();
    resetDesignInput();
    resetQuantInput();
    resetTypeInput();
  }, [resetDeliverInput, resetDesignInput, resetQuantInput, resetTypeInput]);

  useEffect(() => {
    if (Object.is(functionReset, null)) {
      dispatch(formActions.createResetFunction(resetForm));
    }
  }, [dispatch, functionReset, resetForm]);

  const Deliver = useMemo(() => {
    return (
      <Input
        key={"Entregador"}
        inputLable="Entregador"
        type={"text"}
        value={deliver}
        onChange={deliverChangeHandler}
        onBlur={deliverBlurHandler}
        isValid={deliverHasError}
      />
    );
  }, [deliver, deliverChangeHandler, deliverBlurHandler, deliverHasError]);
  const Quantaty = useMemo(() => {
    return (
      <Input
        key={"Quantidade"}
        inputLable="Quantidade"
        type={"number"}
        value={quant}
        onChange={quantChangeHandler}
        onBlur={quantBlurHandler}
        isValid={quantHasError}
      />
    );
  }, [quant, quantChangeHandler, quantBlurHandler, quantHasError]);
  const Type = useMemo(() => {
    return (
      <Input
        key={"Tipo"}
        inputLable="Tipo"
        type={"text"}
        value={type}
        onChange={typeChangeHandler}
        onBlur={typeBlurHandler}
        isValid={typeHasError}
      />
    );
  }, [type, typeChangeHandler, typeBlurHandler, typeHasError]);
  const Design = useMemo(() => {
    return (
      <Input
        key={"Designação"}
        inputLable="Designação"
        type={"text"}
        value={design}
        onChange={designChangeHandler}
        onBlur={designBlurHandler}
        isValid={designHasError}
      />
    );
  }, [design, designChangeHandler, designBlurHandler, designHasError]);

  return {
    deliver: Deliver,
    quantaty: Quantaty,
    type: Type,
    design: Design,
  };
}
