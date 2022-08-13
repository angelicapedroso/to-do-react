import app from "./app";

const PORT = process.env.PORT || 3002;

const server = app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

export default server;
