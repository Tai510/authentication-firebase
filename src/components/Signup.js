import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const hasEightChars = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const passwordIsValid =
    hasEightChars && hasUppercase && hasLowercase && hasNumber;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!passwordIsValid) {
      return setError("Password does not meet the requirements");
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card id="Register-Forms">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                ref={passwordRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <div className="password-rules">
              <p className={hasEightChars ? "valid-rule" : "invalid-rule"}>
                {hasEightChars ? "✔" : "✖"} At least 8 characters
              </p>
              <p className={hasUppercase ? "valid-rule" : "invalid-rule"}>
                {hasUppercase ? "✔" : "✖"} One uppercase letter
              </p>
              <p className={hasLowercase ? "valid-rule" : "invalid-rule"}>
                {hasLowercase ? "✔" : "✖"} One lowercase letter
              </p>
              <p className={hasNumber ? "valid-rule" : "invalid-rule"}>
                {hasNumber ? "✔" : "✖"} One number
              </p>
            </div>

            <Form.Group id="show-password">
              <Form.Check
                type="checkbox"
                label="Show password"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}