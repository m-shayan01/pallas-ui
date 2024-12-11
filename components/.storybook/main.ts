import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/stories/*.tsx'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false, controls: false, actions: false },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: './' })],
    })
  },
}

export default config
