import { defineConfig } from 'vite'


export default defineConfig({
    root: (process.env.IS_DOCKER !== "TRUE") ? ('resources') : ('frontend/public'),
    server: {
        open: (process.env.IS_DOCKER !== "TRUE"),
        hmr: true,
        host: true,
        port: 5173
    }
})
