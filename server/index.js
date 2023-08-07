const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect("mongodb+srv://korzera-admin:admin123@korzera-cluster-1.qgv9mpa.mongodb.net/?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true&dbName=todoapp")

app.listen(3000, () => console.log('Server running on port 3000'));
