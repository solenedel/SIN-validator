import { useState, useEffect } from 'react';
import validateSIN from '../helpers/validateSIN';

function InputForm({ SIN, setSIN }) {
  const [error, setError] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const regex = /^\d*\s*$/;

  // last step of SIN validation
  const completeValidation = () => {
    if (validateSIN(SIN) === true) {
      setValidated(true);
      setError(false);
    } else {
      setValidated(false);
      setError(true);
    }
  };

  useEffect(() => {
    // trigger validation when 9 characters are reached
    if (SIN.length === 9) {
      completeValidation();
    } else if (SIN.length < 9) {
      setValidated(false);
    }
  }, [SIN]);

  const messageToUser = (text: string) => {
    return <p className="font-mainFont text-3xl">{text}</p>;
  };

  const formHandler = (e: React.ChangeEvent<any>) => {
    const userInput = e.target.value;
    setSIN(userInput.replace(/\s/g, ''));

    if (userInput.length === 0) {
      setError(false);
    } else if (
      regex.test(userInput) === false &&
      userInput.length > 0 &&
      userInput !== ' '
    ) {
      setError(true);
    }
  };

  const formSubmitHandler = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    completeValidation();
  };

  return (
    <form
      action="submit"
      onSubmit={formSubmitHandler}
      className="flex flex-col items-center w-full h-1/2 md:h-1/3 justify-start mt-14 ">
      <input
        type="text"
        maxLength={9}
        minLength={9}
        onChange={formHandler}
        value={SIN}
        placeholder="Enter SIN here"
        className="focus:outline-none bg-transparent placeholder-black placeholder-opacity-60 font-mainFont w-4/5 md:w-1/3 text-3xl lg:text-4xl rounded-md border-2 h-20 border-solid border-black p-4 mb-12"
      />
      {validated === true ? messageToUser('☺ This SIN is valid.') : ''}
      {error === true ? messageToUser('☹ This SIN is invalid.') : ''}
    </form>
  );
}

export default InputForm;
