import { defineConfig } from 'vite';

export default defineConfig({
    base: "/site-web/",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
            }
        }
    }
})