import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store/store";

test("it should render login button properly", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const loginButton = screen.getByRole("link", {
    name: /login/i,
  });

  expect(loginButton).toBeVisible();
});
