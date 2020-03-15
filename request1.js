const request = require('request');
var json ={
	"name": "madhu",
	"dob":"28-09-2019",
	"phone":"786868e32q",
	"email":"nakjfbawf@fesfh.com",
	"gender":"male"
}
request.get('http://localhost:8080/api/contacts',{json},function(err,res,body){

if (err){
console.log(err)
}
else{
console.log(body)
}	

});