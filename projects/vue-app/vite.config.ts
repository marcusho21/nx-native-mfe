/// <reference types='vitest' />
import { defineConfig, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

import { federation } from '@module-federation/vite';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import pluginVue from "esbuild-plugin-vue-next";

export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  // const selfEnv = loadEnv(mode, process.cwd());

  return {
    root: __dirname,
    cacheDir: '../node_modules/.vite/vue-app',

    server: {
      port: 5001,
      host: 'localhost',
      strictPort: true,
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [
      federation({
        options: {
          workspaceRoot: __dirname,
          outputPath: 'dist',
          tsConfig: 'tsconfig.json',
          federationConfig: 'module-federation/federation.config.cjs',
          verbose: false,
          dev: command === 'serve',
        },
        adapter: createEsBuildAdapter({ plugins: [pluginVue()] }),
      }),
      vue(),
      nxViteTsPaths(),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
      target: 'esnext',
      outDir: 'dist',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },

    test: {
      globals: true,
      cache: {
        dir: '../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

      reporters: ['default'],
      coverage: {
        reportsDirectory: '../coverage/vue-app',
        provider: 'v8',
      },
    },
  }
});
