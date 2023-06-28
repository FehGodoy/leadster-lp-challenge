import { render ,screen } from "@testing-library/react";
import { VideosProvider } from "../../context/VideosContext";
import Footer from ".";

describe("Footer Component", () => {
  test("Checks if the image is rendered in the Footer component", async  ()  => {
    render(
        <VideosProvider>
          <Footer />
        </VideosProvider>
    );
    const imageElement = await document.querySelector("img");
    expect(imageElement).toBeInTheDocument();
  });
  test("Checks that the main links are rendered correctly in the Footer component", () => {
    render(
        <VideosProvider>
          <Footer />
        </VideosProvider>
    );
    const links = screen.getAllByRole("link", { name: /^(Home|Ferramenta|Preços|Contato)$/ });
    expect(links.length).toBe(4);
  });
  test("Checks that materials are rendered correctly in the Footer component", () => {
    render(
        <VideosProvider>
          <Footer />
        </VideosProvider>
    );
    const materiais = screen.getAllByRole("link", { name: /^(Blog|Parceria com Agências|Guia Definitivo do Marketing|Materiais Gratuitos)$/ });
    expect(materiais.length).toBe(4);
  });
});
