module.exports = {
  apps: [
    {
      name: "Directorio",
      script: "./src/index.js",
      watch: true,
      max_memory_restart: "1G",
      exec_mode: "cluster",
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
