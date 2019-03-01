const mysql = require("mysql");

const db = mysql.createConnection({
	host: "www.db4free.net",
	user: "amitramsakal",
	password: "Amit@250986",
	database: "newsdb",
});

db.connect(function(err){
	if(err){
		console.log(err);
	}else{
		console.log("Connected to database!!!");
	}
});

module.exports = db;