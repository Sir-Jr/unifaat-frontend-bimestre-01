/**
 * Middleware de CORS.
 *
 * Libera o acesso à API para o front-end rodando em desenvolvimento
 * (Vite, http://localhost:5173), permitindo requisições cross-origin
 * com os métodos e headers necessários.
 */
export default function CorsMiddleware(request, response, next) {
    const allowedOrigin = "http://localhost:5173";

    response.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.setHeader("Access-Control-Allow-Credentials", "true");

    // Responde imediatamente às requisições de preflight (OPTIONS)
    if (request.method === "OPTIONS") {
        return response.sendStatus(204);
    }

    next();
}
