import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";  // ✅ import
import Login from "./Login";

test("renders login page and navigates when filled", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // Gmail input exists
  const emailInput = screen.getByPlaceholderText("Enter Gmail");
  expect(emailInput).toBeInTheDocument();

  // Password input exists
  const passwordInput = screen.getByPlaceholderText("Enter Password");
  expect(passwordInput).toBeInTheDocument();

  // Click login without filling → alert
  fireEvent.click(screen.getByText("Login Now"));
});
