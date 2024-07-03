import React, { useState } from "react";

const SubmitForm = () => {
  const [text, setText] = useState("Hello");
  const [submit, setSubmit] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  const nameText = (e) => {
    const value = e.target.value;
    setText(value);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        {submit ? `Hello ${text}` : "Hello"}
        <br />
        <input
          onChange={nameText}
          type="text"
          placeholder="Enter Your Name"
          name="text"
        />
        <br />
        <input type="email" placeholder="Enter Your Email" name="email" />
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
        />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SubmitForm;
