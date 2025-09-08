import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("renders dashboard message", () => {
  render(<Dashboard />);
  expect(screen.getByText(/Welcome to Dashboard/i)).toBeInTheDocument();
});
