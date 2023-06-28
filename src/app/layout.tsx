import "./globals.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Leadster",
  description: "Teste técnico LP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
