import { render ,screen } from "@testing-library/react";
import Home from "./page";

describe("Home Component", () => {
  test("renders the home component with all sub-components",  ()  => {
    render(
<Home />
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('banner')).toBeInTheDocument();
    expect(screen.getByTestId('nav-videos')).toBeInTheDocument();
    expect(screen.getByTestId('videos-content')).toBeInTheDocument();
    expect(screen.getByTestId('geracao-section')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
