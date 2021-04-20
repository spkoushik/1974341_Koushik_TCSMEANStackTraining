let app  = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/main.html");
})

app.get("/addCourse",(req,res)=>{
    res.sendFile(__dirname+"/addCourse.html");
})

app.get("/updateCourse",(req,res)=>{
    res.sendFile(__dirname+"/updateCourse.html");
})

app.get("/deleteCourse",(req,res)=>{
    res.sendFile(__dirname+"/deleteCourse.html");
})

app.get("/fetchCourse",(req,res)=>{
    res.sendFile(__dirname+"/fetchCourse.html");
})

app.post("/storeAllDetails",(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let description = req.body.description;
    let amount = req.body.amount;

    mongoClient.connect(url, {useUnifiedTopology: true}, (err1,client)=>{
        if(!err1)
        {
            let db = client.db("meanstack");
            db.collection("coursePlatform").insertOne({_id:id,Coursename:name,Description:description,Amount:amount},(err2,result)=>
            {
                if(!err2)
                {
                    console.log(result.insertedCount);
                }else{
                    console.log(err2.message);
                }
                client.close();
            })
        }
    })
res.sendFile(__dirname+"/main.html")
})



app.post("/updateAllDetails",(req,res)=>{
    let id = req.body.id;
    let amount = req.body.amount;

    mongoClient.connect(url, {useUnifiedTopology: true}, (err1,client)=>{
        if(!err1)
        {
            let db = client.db("meanstack");
            db.collection("coursePlatform").updateOne({_id:id},{$set:{Amount:amount}},(err2,result)=>
            {
                if(!err2)
                {
                    if(result.modifiedCount>0){
                        console.log("result updated succesfully");
                    }else{
                        console.log("Record didn't update");
                    }
                }
                client.close();
            })
        }
    })
res.sendFile(__dirname+"/main.html")
})




app.post("/deleteAllDetails",(req,res)=>{
    let id = req.body.id;
   
    mongoClient.connect(url, {useUnifiedTopology: true}, (err1,client)=>{
        if(!err1)
        {
            let db = client.db("meanstack");
            db.collection("coursePlatform").deleteOne({_id:id},(err2,result)=>
            {
                if(!err2)
                {
                    if(result.deletedCount>0){
                        console.log("result deleted succesfully");
                    }else{
                        console.log("Record didn't present");
                    }
                }
                client.close();
            })
        }
    })
res.sendFile(__dirname+"/main.html")
})




app.post("/fetchAllDetails",(req,res)=>{
    res.setHeader("content-type","text/html");
    var tableinfo = `<h2> List of Courses </h2>
    
                    <table>
                    <tr>
                    <th> Course Id </th>
                    <th> Course Name </th>
                    <th> Description </th>
                    <th> Amount </th>
                    
                    `
    var obj = [];
    mongoClient.connect(url, {useUnifiedTopology: true}, (err1,client)=>{
        if(!err1)
        {
            let db = client.db("meanstack");
            let cursor = db.collection("coursePlatform").find().toArray(function(err2,result){
                if(err2) 
                {
                    throw err2;
                }
                console.log("Result ...");
                console.log(result.length)
                for(let i=0;i<result.length;i++)
                {
                    obj[i] = result[i];
                }
                console.log(obj);
                for(let i=0;i<obj.length;i++)
                {
                    tableinfo+= ` <tr>
                                  <td> ${obj[i].id} </td>
                                  <td> ${obj[i].Coursename} </td>
                                  <td> ${obj[i].Description} </td>
                                  <td> ${obj[i].Amount} </td>
                                  </tr>
                    
                                `
                }

                tableinfo+= `</table>`
                console.log(tableinfo);
                res.send(tableinfo);
            })
        }
    })
    console.log("@@@@@@");
    console.log(obj);
    console.log(tableinfo);
})

app.listen(9090,()=>console.log("Running on port number 9090"));