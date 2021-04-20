let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");

})

http.listen(9090,()=>console.log('server running on port 9090'));

let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url, {useUnifiedTopology: true }, (err1, client)=>{
    
    if(err1)
    {
        let db = client.db("meanstack");
        io.on("connection",(socket)=>{
            console.log("client connected to application....");
            socket.on("chat message",(msg)=>{
                db.collection("chatlog").insertOne({name:msg.name, message:msg.desc},(err2,result)=>{
                    if(!err2){
                        console.log(result.insertedCount);
                    }else{
                        console.log(err2.message);
                    }
                    client.close();
                });

                console.log(msg.desc);

            });
        });
    }
});