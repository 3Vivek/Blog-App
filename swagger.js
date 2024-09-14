const swaggerDoc = {
    openapi: "3.0.0",
    info: {
      title: "Your Project API",
      version: "1.0.0",
      description: "Documentation for your project's API",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 8000}`,
      },
    ],
    paths: {
      // Add your API routes here
    },
  };
  
  module.exports = swaggerDoc;