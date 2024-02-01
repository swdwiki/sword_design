import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Imagebox from "../src/imagebox.vue";

describe("Imagebox.vue", () => {
  it("create", () => {
    const wrapper = mount(() => <Imagebox />);
    expect(wrapper.text()).toContain("Imagebox components");
  });
});
