import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Middleware to support hiding .html extensions in URLs
  app.use((req, res, next) => {
    if (req.method === "GET") {
      let cleanPath = req.path;

      // 1. Redirect direct requests for .html files to their clean URL version
      if (cleanPath.endsWith(".html")) {
        const cleanUrl = cleanPath.slice(0, -5);
        const query = req.url.substring(req.path.length);
        const targetUrl = (cleanUrl === "/index" ? "/" : cleanUrl) + query;
        return res.redirect(301, targetUrl);
      }

      // 2. Remove trailing slashes for clean matching (except root)
      if (cleanPath.endsWith("/") && cleanPath.length > 1) {
        cleanPath = cleanPath.slice(0, -1);
      }

      // 3. If there is no file extension, map it internally to the corresponding .html file if it exists
      if (!cleanPath.includes(".")) {
        const relativeHtmlPath = cleanPath === "/" ? "/index.html" : `${cleanPath}.html`;
        const targetDir = process.env.NODE_ENV === "production"
          ? path.join(process.cwd(), "dist")
          : process.cwd();

        const filePath = path.join(targetDir, relativeHtmlPath);
        if (fs.existsSync(filePath)) {
          const query = req.url.substring(req.path.length);
          req.url = relativeHtmlPath + query;
        }
      }
    }
    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
