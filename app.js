const express = require("express");
const expressWinston = require("express-winston");
require("dotenv").config();
const connectDB = require("./Config/Database");
const AuthRoutes = require("./Routes/auth.route");
const FolderRoutes = require("./Routes/folder.route");
const {
    routeLoger: logger,
    internalErrorLoger: errorLogger,
} = require("./Config/WinstonLogger");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    expressWinston.logger({
        winstonInstance: logger,
        statusLevels: true,
    })
);

// Route
app.get("/", (req, res, next) => {
    logger.error("hello");
    return res.json({
        status: 200,
        data: "Hello",
    });
});
app.use(AuthRoutes);
app.use("/folder", FolderRoutes);

const port = process.env.PORT || 3000;
(() => {
    connectDB().then((res) => {
        console.log("database connected");
        app.listen(port, () => {
            console.log(`server listen at port ${port}`);
        });
    });
})();
