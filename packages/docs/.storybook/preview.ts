import { themes } from '@storybook/theming';
import type { Preview } from "@storybook/react";


const preview: Preview = {
  parameters: {
    backgrounds: {default: "light"},
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    }
  },
};

export default preview;
