import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <style>
        {`
          [data-theme='dark'] {
            /* Estilos para el tema oscuro */
            background-color: black;
            color: white;
          }
        `}
      </style>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
