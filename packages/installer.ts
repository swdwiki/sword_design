import type { App, Plugin } from "vue";

import { SwdButton } from "./components/button";
import { SwdImagebox } from "./components/imagebox";

const component = [SwdButton, SwdImagebox] as Plugin[];

export const install = function (app: App) {
  component.forEach((i) => app.use(i));
};

export default {
  install,
};
