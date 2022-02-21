/*var count=34;
count++;
console.log("Server is running");
console.log(count);


//CTL + SHIFT + C   

*/

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam Pvt. Ltd  </h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Fabrikam is a multinational company has their 24 Offices all over world. Company wanted to build and host Information Management Solutions in web. </li>"+
                    " <li>Company also wants to host internet public web site for their potential customers to know about products and services provided</li>"+
                    " <li>They required to build and host intranet application for all employees to access Human Resource, Accounting and Project Management related information.</li>"+
                    " <li>Fabrikam has public Cloud subscription to use it as Infrastructure as a Service (I-a-a-S) and Platform As A Service.</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
// if external packages are required
// we have to download those packages from internet using  package manager tool
// Runtime--------tools-------------packages-----------------------config file
// Java-----------maven--------------.jar files----------------------pom.xml
// Android--------graddle------------android jar file----------------pom.xml
// Python---------pip----------------Python libraries----------------
// .NET ---------Nugget--------------dll files-----------------------package.config
// NodeJS----------npm --------------download node modules-----------package.json 
