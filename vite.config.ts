import react            from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import svgr             from 'vite-plugin-svgr';
import { resolve }      from 'path';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: '**/*.svg',
        }),
    ],
    server: {
        open: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
            },
        },
    },
});
