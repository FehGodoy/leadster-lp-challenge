import { render, screen } from "@testing-library/react";
import { VideosProvider } from "../../context/VideosContext";
import Banner from ".";

describe("Banner Component", () => {
  test("Checks that you have the elements on the screen", () => {
    render(
        <VideosProvider>
          <Banner />
        </VideosProvider>
    );
    const h1Element = screen.getByText("Mais Conversão");
    const h2Elements = document.querySelectorAll("h2");
    const pElement = document.querySelector("p");
    expect(pElement).toBeInTheDocument();
    expect(h2Elements.length).toBe(2);
    expect(h1Element).toBeInTheDocument();
  });
});
