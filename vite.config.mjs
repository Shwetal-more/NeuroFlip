import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("Loaded ENV Variables:", env); // Debugging
  return {
    define: {
      "process.env": env,
    },
  };
});
