var http=require("http");
var querystr=require("querystring");
var qs,name,email;
http.createServer(function(req,res){
var data1='';
req.on('data',function(chunk){
console.log(chunk);
data1 += chunk;
});
req.on('end',function(){
qs=querystr.parse(data1);
console.log(qs);
name=qs['name'];
email=qs['email'];
password=qs['password'];
subject=qs['subject'];

res.write('<html><body style="background-color:aquamarine;color:chocolate;text-align:center;"><h1>Course registered successfully</h1><body></html>');
var MongoClient=require('mongodb').MongoClient;
 var url="mongodb://localhost:27017/";

 MongoClient.connect(url,function(err,db){
     if(err) throw err;
     var dbo=db.db("mydb");
     var myobj={Name:name,Email:email,Password:password,Subject:subject};
     dbo.collection("Users").insertOne(myobj,function(err,res){
         if(err) throw err;
         db.close();
     });
 }); 

 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { Email:null };
    dbo.collection("Users").deleteMany(myquery, 
    function(err, obj) {
    if (err) throw err;
    db.close();
    });
    });

res.end()
});
}).listen(7000);
console.log("Server has started....");