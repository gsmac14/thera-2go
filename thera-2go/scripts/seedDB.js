const mongoose = require("mongoose");
const db = require("../models/Img");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://gmac:CodeMansa21!@cluster0.xnd6h.mongodb.net/thera2go?retryWrites=true&w=majority");

const imageSeed = [
   {
       thumbnail: "IMG_1788.JPG",
       title: "Bicep curl",
       explain: " 1. Start from standing or seated position with dumbbell in each hand. \nYour elbows should rest at your side. \n2. Bring the dumbbells all the way to your shoulders by bending your elbows. \n3. Reverse the curl slowly and repeat"
   }

]