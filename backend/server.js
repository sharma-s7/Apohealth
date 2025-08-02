import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./Config/mongodb.js"
import connectCloudinary from "./Config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors("https://apohealthfrontend.vercel.app/",
             "https://apohealthadmin.vercel.app/"));
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      // "http://localhost:5173",
      // "http://localhost:4173",
      "https://apohealthfrontend.vercel.app/",
      "https://apohealthadmin.vercel.app/"
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))
