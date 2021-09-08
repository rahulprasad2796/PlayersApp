const mongoose = require("mongoose");
const express = require("express");

const app = express();

var cors = require("cors");
app.use(cors());

const dbURI = `mongodb+srv://Rahul:rahul.dbUser@cluster0.vz6wy.mongodb.net/edyodadb?retryWrites=true&w=majority`;

const options = {
  useUnifiedTopology:true,
  useNewUrlParser:true
}

mongoose.connect(dbURI,options)
.then(()=>console.log(`database established`))
.catch((err) => console.log(err))



const playerSchema = new mongoose.Schema({},{strict:false});
 var player = mongoose.model('player',playerSchema)

 app.post('/player',async (req,res)=> {
   var data = await player.insertMany([
    {
        name:"Sachin Tendulkar",
        dob:"24th April 1973",
        mpt:200,
        mpo:463,
        rst:15921,
        rso:18426,
        img:"https://th.bing.com/th/id/OIP.EvUW8e4EaazcI71VhGZLvAHaKm?pid=ImgDet&rs=1"
   },{
        name:"Mahendra Singh Dhoni",
        dob:"7th July 1981",
        mpt:90,
        mpo:350,
        rst:4876,
        rso:10773,
        img:"https://th.bing.com/th/id/R.229554b9124c04713d15f94e03796352?rik=p1aO9111jAjliw&riu=http%3a%2f%2fimages.newindianexpress.com%2fuploads%2fuser%2fimagelibrary%2f2018%2f7%2f7%2foriginal%2fDHyONI1-PTI.jpg&ehk=NHfmqsoP2PMlerYFWTd5Jb5zHE4PaUPW7NlhBBUPMSs%3d&risl=&pid=ImgRaw&r=0"
    },{
        name:"Virat Kohli",
        dob:"5th November 1988",
        mpt:96,
        mpo:254,
        rst:7765,
        rso:12169,
        img:"https://th.bing.com/th/id/OIP.JTl-NLndDYhuRFrO5CSqQwHaEK?pid=ImgDet&rs=1"
    },{
        name:"Virendra Sehwag",
        dob:"20th October 1978",
        mpt:104,
        mpo:251,
        rst:8586,
        rso:8273,
        img:"https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2013/01/10/Photos/sehwag--621x414.jpg"
    },{
        name:"Yuvraj Singh",
        dob:"12th December 1981",
        mpt:40,
        mpo:304,
        rst:1900,
        rso:8701,
        img:"https://th.bing.com/th/id/OIP.8eGHANrijmCW8-Wei2f3mgHaFj?pid=ImgDet&rs=1"
    },{
        name:"Sauarav Chandidas Ganguly",
        dob:"8th July 1972",
        mpt:113,
        mpo:311,
        rst:7212,
        rso:11363,
        img:"https://www.cricketcountry.com/wp-content/uploads/2020/07/Image-5.jpg"
    },{
        name:"Dinesh Karthik",
        dob:"1st June 1985",
        mpt:26,
        mpo:94,
        rst:1025,
        rso:1752,
        img:"https://th.bing.com/th/id/OIF.wHlS1WZ9bFmldNtutBALUw?pid=ImgDet&rs=1"
    },{
        name:"Rahul Sharad David",
        dob:"11th January 1973",
        mpt:164,
        mpo:344,
        rst:13288,
        rso:10889,
        img:"https://th.bing.com/th/id/OIP.ALfDbcU_twN0NUe0uEDA0gHaE7?pid=ImgDet&rs=1" 
    },{
        name:"Kapil Dev Ramlal Nikhanj",
        dob:"6th January 1959",
        mpt:131,
        mpo:225,
        rst:5248,
        rso:3783,
        img:"https://th.bing.com/th/id/OIP.dTZK-hSMHMHPz-8NSvRfogHaFC?pid=ImgDet&rs=1"
    }])
   res.send(data)
})

app.get("/player", async (req,res) => {
  var data = await player.find();
  res.send(data)
})


app.listen(8000, () => console.log(`server started`))