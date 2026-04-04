import { readFileSync } from "fs";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";

import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isAnalyze = mode === "analyze";

  return {
    plugins: [
      react(),
      mkcert(),
      svgr({
        svgrOptions: {
          exportType: "named",
          ref: true,
          titleProp: true,
        },
      }),
      ...(isAnalyze
        ? [
            visualizer({
              open: true,
              gzipSize: true,
              brotliSize: true,
              template: "treemap",
            }),
          ]
        : []),
    ],
    resolve: {
      tsconfigPaths: true,
      alias: {
        "date-fns/locale": "date-fns/locale/ru",
      },
    },
    optimizeDeps: {
      include: ["antd/es/locale/ru_RU"],
    },
    server: {
      port: 5173,
      open: true,
      strictPort: true,
      https: {
        key: readFileSync("./certs/localhost-key.pem"),
        cert: readFileSync("./certs/localhost.pem"),
      },
    },
    build: {
      minify: "terser",
      sourcemap: false,
      terserOptions: {
        compress: true,
        mangle: true,
        format: {
          comments: false,
          beautify: false,
        },
      },
      commonjsOptions: {
        include: [/node_modules/],
      },
      rollupOptions: {
        external: [],
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("antd")) return "antd";
              if (id.includes("date-fns")) return "date-fns";

              return "vendor";
            }
          },
        },
      },
    },
  };
});
