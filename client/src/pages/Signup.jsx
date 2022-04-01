import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createUser } from "../utils/api";
import Auth from "../utils/auth";

const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSignUp}>
        <h2>Sign up today!</h2>
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />
        <label>Username</label>
        <input
          type="text"
          placeholder="Your username"
          name="username"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Your password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
        />
        <button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
        >
          Sign Up!
        </button>
        <Link to="/login">
          <h3>Have an account already? Log In!</h3>
        </Link>
      </Form>
    </div>
  );
};

const Form = styled.form`
  margin: 2rem 10rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black 2px solid;
  border-radius: 1rem;
  background: linear-gradient(35deg, #494949, #313131);

  h2 {
    color: white;
    padding-bottom: 1rem;
  }
  h3 {
    color: white;
    margin: 0.5rem;
  }
  h3:hover {
    transform: scale(1.05);
    text-shadow: black 5px 5px;
  }
  label {
    margin: 0.6rem;
    color: white;
  }
  input {
    width: 30%;
    padding: 0.5rem;
    border-radius: 0.3rem;
  }
  button {
    margin: 0.6rem;
    padding: 0.3rem;
    color: white;
    border-radius: 0.3rem;
    background: linear-gradient(35deg, #494949, #313131);
  }
  button:hover {
    background: linear-gradient(to right, #f27121, #e94057);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export default Signup;
