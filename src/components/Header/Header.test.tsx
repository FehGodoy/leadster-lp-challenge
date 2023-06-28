import { render } from "@testing-library/react";
import { VideosProvider } from "../../context/VideosContext";
import Header from ".";

describe("Header Component", () => {
  test("Check if they have an image in the component", async () => {
    render(
        <VideosProvider>
          <Header />
        </VideosProvider>
    );
    const imageElement = await document.querySelector("img");
    expect(imageElement).toBeInTheDocument();
  });
});
