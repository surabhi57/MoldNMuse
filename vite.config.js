import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rolldownOptions: {
      onwarn(warning, defaultHandler) {
        const source = (warning.id || '').replaceAll('\\', '/');
        const isReactRouterUseClientDirective =
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.message.includes('"use client"') &&
          source.includes('/node_modules/react-router/');

        if (!isReactRouterUseClientDirective) defaultHandler(warning);
      },
    },
  },
});
