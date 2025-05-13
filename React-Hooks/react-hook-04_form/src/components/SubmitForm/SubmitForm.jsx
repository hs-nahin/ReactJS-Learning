import React, { useRef, useState } from "react";

const SubmitForm = () => {
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState(false);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    setSubmit(true);

    if (passwordRef.current.value.length < 8) {
        setError("Password must be atleast 8 characters!")
    } else {
        setError('')
    }
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
          ref={passwordRef}
          placeholder="Enter Your Password"
          name="password"
        /> <p style={{color: 'red'}}>{error}</p>
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SubmitForm;
