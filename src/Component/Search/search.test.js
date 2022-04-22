import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./index";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("A search component", () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  it("should have a search input", () => {
    const searchInput = screen.getByText("Search");
    expect(searchInput).toBeInTheDocument();
    userEvent.click(searchInput);
    expect(searchInput).toHaveValue("");
  });
});
