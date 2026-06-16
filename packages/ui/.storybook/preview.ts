import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "sunrise",
      values: [
        { name: "sunrise", value: "#fff9f0" },
        { name: "dark", value: "#1a1a2e" },
      ],
    },
  },
};

export default preview;
