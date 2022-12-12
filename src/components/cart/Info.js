import useInput from "../../hooks/use-input";

function Info() {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredAddress,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangedHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput((value) => value.trim() !== "");

  console.log(nameInputHasError);
  return (
    <center>
      <form>
        <br />
        <br />
        <br />
        <br />
        <input
          placeholder="Name"
          type="text"
          className={nameInputHasError ? "error" : ""}
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        <br />
        <br />
        <input
          placeholder="Address"
          className={addressInputHasError ? "error" : ""}
          type="text"
          id="address"
          onChange={addressChangedHandler}
          onBlur={addressBlurHandler}
          value={enteredAddress}
        />
        <br />
        <br />
        <input placeholder="Mobile Number" />
        <br />
        <br />
        <button className="button"> Place Order </button>
      </form>
    </center>
  );
}

export default Info;
