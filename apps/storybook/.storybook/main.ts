import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    './stories/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../../packages/ui/**/*.stories.@(ts|tsx|js|jsx|mdx)'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (config) => {
    config.resolve = { ...(config.resolve||{}), dedupe: ['react', 'react-dom'] };
    return config;
  },
};
export default config;
