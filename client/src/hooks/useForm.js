import { useState } from "react";

function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    setValues(oldState => ({
      ...oldState,
      [e.target.name]: e.target.values,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(values);

  }

  return {
    values,
    onChange,
    onSubmit,
  };
}

export default useForm;
