let http = require("http");
let url = require("url");
let port = 9090;
let fs=require("fs")
let loginInfo = `
    <form action="/store" method="get">
        <h1 color:"Blue"><center>Task Planner</center></h1><br/>
        <h3>Add Task</h3>
        <label>Employee Id</label>
        <input type="text" name="empid"/><br/>
        <label>Task Id </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="taskid"/><br/>
        <label>Task</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="task"/><br/>
        <label>
        DeadLine</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="date" name="date"/><br/>
        <input type="submit" value="Add Task"/>
    </form>

    <form action="/remove" method="get">
    <h3>Delete Task</h3>
    <label>Task Id</label>
        <input type="text" name="taskid"/><br/><br/>
        <input type="submit" value="Delete Task"/>
    </form>

    <div>
    <form action="/display" method="get">
    <input type="submit" value="List Tasks"/>
    </form>
    </div>
`
let server = http.createServer((req,res)=> {
    var pathInfo = url.parse(req.url,true).pathname;
    if(req.url=="/"){
        res.setHeader("content-type","text/html"); 
        res.end(loginInfo);
        }else 
        if(pathInfo=="/store"){  
            res.setHeader("content-type","text/html");  
            res.end(loginInfo);
            var data = url.parse(req.url,true).query;
            let eid=data.empid 
            let tid=data.taskid
            let task=data.task
            let deadline=data.date
            let emp1={"empId":eid,"taskId":tid,"task":task,"deadline":deadline}
            fs.readFile('taskrecords.json',function(err,data){
                var obj=JSON.parse(data)
                obj.push(emp1)
                var empString = JSON.stringify(obj);
                fs.writeFile("taskrecords.json",empString,(err)=> {
                if(!err){
                    console.log("Record stored successfully...")
                }
                
            })
        })
        }else if(pathInfo=="/display"){
            res.setHeader("content-type","text/html"); 
            var data=fs.readFileSync('taskrecords.json')
            let  obj=JSON.parse(data)
            var tinfo 
            console.log(obj)
            tinfo=  `<h1>Task Details</h1>
            <table border="1">
            <tr>
            <th>Employee Id</th>
            <th>Task Id</th>
            <th>Task</th>
            <th>Deadline</th>
            </tr>`
                for(let i=0;i<obj.length;i++)
                {
                    console.log(obj[i].empId)
                    tinfo+=  `
                    <tr>
                    <td>${obj[i].empId}</td>
                    <td>${obj[i].taskId} 
                    </td>
                    <td>${obj[i].task}</td>
                    <td>${obj[i].deadline}</td>
                    </tr>
                    `
                }
                tinfo+=  `</table>`
                res.end(loginInfo+tinfo)
            }else if(pathInfo=="/remove"){
                res.setHeader("content-type","text/html");
                res.end(loginInfo);
                var obj=new Array()
                var jsondata= fs.readFileSync('taskrecords.json')
                obj= JSON.parse(jsondata)
                var data = url.parse(req.url,true).query;
                let tid=data.taskid
                for(let i=0;i<obj.length;i++)
                {
                    if(tid==obj[i].taskId)
                    {
                        var arr=obj.splice(i)
                        console.log(arr)
                        var empString = JSON.stringify(obj);
                            fs.writeFile("taskrecords.json",empString,(err)=> {
                                if(!err){
                                    console.log("Record stored successfully...")
                                }else{
                                    res.end(loginInfo+"Invalid Task Id")
                                }
                            })
                        }
                    }
                }
    res.end();  
})
server.listen(port,()=>console.log(`running on port num ${port}`));