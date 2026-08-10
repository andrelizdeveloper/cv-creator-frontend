import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const githubPagesBase = repositoryName ? `/${repositoryName}/` : '/';

// https://vite.dev/config/
export default defineConfig({
    base: process.env.GITHUB_ACTIONS ? githubPagesBase : '/',
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/test/setup.ts',
        css: true,
    },
});
