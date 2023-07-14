import App from "./App";
import { render } from "react-dom";

const initialize = (): void => {
  const shadowHost = document.createElement("preact-library");
  const shadowDom = shadowHost.attachShadow({ mode: "open" });

  document.body.insertAdjacentElement("afterend", shadowHost);

  render(<App />, shadowDom as unknown as HTMLElement, () => {
    console.log("Preact Library Initialized");
  });
};

export { initialize, App };
