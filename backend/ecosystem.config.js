module.exports = {
  apps: [
    {
      name: "ciscocms",
      cwd: "/var/www/ciscocms",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: "localhost",
        DATABASE_PORT: "5432",
        DATABASE_NAME: "strapi",
        DATABASE_USERNAME: "your-name",
        DATABASE_PASSWORD: "password",
      },
    },
  ],
};
