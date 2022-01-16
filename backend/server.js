const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// SET PORT
const port = process.env.PORT || 3001;

// API SECURITY
app.use(helmet());

// HANDLE CORS
app.use(cors());

// LOGGER
app.use(morgan("tiny"));

// SET BODYPARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HANDLE ERROR
const handleError = require("./src/utils/errorHandler");

// LOAD ROUTERS
const userRouter = require("./src/routers/userRouter");
const charRouter = require("./src/routers/characterRouter");
const eventRouter = require("./src/routers/eventsRouter");
const jobsRouter = require("./src/routers/jobsRouter");
const documentsRouter = require("./src/routers/documentsRouter");
const usergroupsRouter = require("./src/routers/usergroupsRouter");

// USE ROUTERS
app.use("/user", userRouter);
app.use("/character", charRouter);
app.use("/events", eventRouter);
app.use("/jobs", jobsRouter);
app.use("/documents", documentsRouter);
app.use("/usergroups", usergroupsRouter);

// ERROR ROUTES
app.use((req, res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(port, () => {
  console.log(`API is now ready on http://localhost:${port}`);
});
