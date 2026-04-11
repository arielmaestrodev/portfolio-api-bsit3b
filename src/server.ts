import app from "@/app";
import { ENV } from "@/config/env";

const startServer = () => {
  try {
    app.listen(ENV.PORT, () => {
      console.log("---------------------------------------------------");
      console.log(`${ENV.APP_NAME} is running successfully!`);
      console.log(`Environment: ${ENV.NODE_ENV}`);
      console.log(`Port: ${ENV.PORT}`);
      console.log(`Timestamp: ${new Date().toISOString()}`);
      console.log("---------------------------------------------------");
    });

  } catch (error) {
    console.error("Failed to start server: ", error);
    process.exit(1);
  }
}

startServer();