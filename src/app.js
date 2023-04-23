const express = require('express');
const app = express(); 
const path =  require('path');
const hbs =  require('hbs');
const port = process.env.PORT || 3000;

// *public static path 
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partial");


app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));


app.get("",(req,res)=>{
    res.render("index");
});


//*routing
app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"Opps page not found"
    });
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});