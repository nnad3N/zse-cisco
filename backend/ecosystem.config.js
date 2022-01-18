module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "/home/your-name/my-strapi-project/my-project",
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
