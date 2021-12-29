require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const AppError = require("./utils/appError");

const authRouter = require("./routes/authRouter");
const invoiceRouter = require("./routes/invoiceRouter");
const userRouter = require("./routes/userRouter");
const feedbackRouter=require('./routes/feedbackRouter');

console.log(
  process.env.PORT,
  process.env.DBNAME,
  process.env.EMAIL,
  process.env.PASS
);

var app = express();

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/user", authRouter);
app.use("/invoices", invoiceRouter);
app.use('/feedbacks',feedbackRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't reach '${req.originalUrl}' on this server!!`, 404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

//connecting to database
const dbname = process.env.DBNAME || "invoice_record";
const dbUrl = `mongodb://localhost:27017/${dbname}`;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection error " + err.message);
});
mongoose.connection.once("open", () => {
  console.log("MongoDB connected on " + dbUrl);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!  Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
