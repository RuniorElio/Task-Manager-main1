// Import necessary modules
const express = require("express");
const cors = require("cors"); // Allow cross-origin requests

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("El backend esta funcionando!");
});

// Healthcheck para Railway
app.get("/health", (req: any, res: any) => {
  res.status(200).json({ status: "ok" });
});

// Integrate routes
app.use("/tasks", require("./routes/tasks"));
app.use("/auth", require("./routes/auth"));
app.use("/test", require("./routes/test"));


// Fallo intencional para el Laboratorio 3 - Simulacro de Caos
// En GitHub Actions (CI) no se activa; al desplegar en Railway sí.
if (!process.env.GITHUB_ACTIONS) {
  throw new Error("fallo simulado");
}




// Start the server
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
