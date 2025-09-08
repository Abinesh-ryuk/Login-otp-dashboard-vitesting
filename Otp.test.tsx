import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";  // ✅ import
import Otp from "./Otp";

test("renders OTP page and validates input", () => {
  render(
    <MemoryRouter>
      <Otp />
    </MemoryRouter>
  );

  const otpInput = screen.getByPlaceholderText("Enter OTP");
  expect(otpInput).toBeInTheDocument();

  fireEvent.change(otpInput, { target: { value: "1234" } });
  expect(otpInput).toHaveValue("1234");
});
