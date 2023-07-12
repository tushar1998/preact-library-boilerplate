import { render } from "preact/compat";
import App from "./App";
import { h } from "preact";

const initialize = (): void => {
  const shadowHost = document.createElement("preact-library");
  const shadowDom = shadowHost.attachShadow({ mode: "open" });

  document.body.insertAdjacentElement("afterend", shadowHost);

  render(h(App, {}), shadowDom as unknown as HTMLElement);
};

export { initialize };
