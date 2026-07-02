import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, updatePassword, updateEmail } = useAuth();

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

  function handleSubmit(e) {
    e.preventDefault();

    if (password && !passwordIsValid) {
      return setError("Password does not meet the requirements");
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card id="Register-Forms">
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                ref={passwordRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>

            {password && (
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
            )}

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
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
}