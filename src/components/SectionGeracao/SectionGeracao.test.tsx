import { render, screen } from "@testing-library/react";
import { VideosProvider } from "../../context/VideosContext";
import SectionGeracao from ".";

describe("SectionGeracao Component", () => {
  test("Verifies the presence of specific images in the GeracaoSection component", () => {
    render(
      <VideosProvider>
        <SectionGeracao />
      </VideosProvider>
    );
    const imageElement = document.querySelector("img[alt='Geração de Leads']");
    expect(imageElement).toBeInTheDocument();
  });
  test("Verifies the presence of specific text in the GeracaoSection component,h3", () => {
    render(
        <VideosProvider>
          <SectionGeracao />
        </VideosProvider>
      );
    const textElement = document.querySelector("h3");
    expect(textElement?.textContent).toContain("Pronto para triplicar sua");
  });
  test("Verifies the presence of specific text in the GeracaoSection component, h6", () => {
    render(
        <VideosProvider>
          <SectionGeracao />
        </VideosProvider>
      );
    const textElement = document.querySelector("h6");
    expect(textElement?.textContent).toContain("Criação e ativação");
  });
});
