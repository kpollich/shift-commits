import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import App from "./components/App/App";

/* tslint:disable-next-line:no-unused-expression */
injectGlobal`
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
