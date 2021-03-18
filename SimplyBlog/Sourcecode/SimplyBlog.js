var blogObj = [];

function storeInSession()
{ 
   
        sessionStorage.setItem("bloginfo",JSON.stringify(blogObj));
}

function retrive()
{
   
    var obj = JSON.parse(sessionStorage.getItem("bloginfo"));
    console.log(obj);
}

function onFormSubmit()
{
    alert("Data added...");

    var title = document.getElementById("title").value;
    var articles = document.getElementById("articles").value;
    var imageid = document.getElementById("image").files[0].name;
    console.log(title);
    console.log(articles);
    console.log(imageid);
    document.getElementById("titleid").innerHTML=title;
    document.getElementById("articlesid").innerHTML=articles;
    document.getElementById("imageid").src=imageid;

    var imageid1 = document.getElementById("image").files[0].name;
    console.log(title)
    console.log(articles);
    console.log(imageid1);
    document.getElementById("titleid1").innerHTML=title;
    document.getElementById("articlesid1").innerHTML=articles;
    document.getElementById("imageid1").src=imageid1;
    
    resetData();
    storeInSession();
}

function resetData()
{
    document.getElementById("title").value ="";
    document.getElementById("articles").value = "";
    document.getElementById("image").value = "";
        
}


