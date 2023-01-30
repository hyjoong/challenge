import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": "pages/*",
      "@components": "components/*",
      "@constants": "constants/*",
      "@lib": "lib/*",
      "@utils": "utils/*",
      "@hooks": "hooks/*",
      "@styles": "styles/*",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./__tests__/setup.ts",
  },
});
