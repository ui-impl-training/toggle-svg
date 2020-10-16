import { h, render } from "preact";
import { setup } from "goober";
import { Root } from "./root";

setup(h);

render(<Root></Root>, document.body);
