'use strict';

const db = require('../db/db');
/**
 * Add a new news to publish
 * 
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addNewsItem = function(data) {
  return new Promise(function(resolve, reject) {
  	let sql = "INSERT into news set ?";
	db.query(sql,[data], function(err, data){
		if(err){
			resolve(err);
		}else{
			resolve(data);
		}
	});
  });
};

exports.updateNewsItem = function(data,id) {
  return new Promise(function(resolve, reject) {
  	let sql = "UPDATE news set ? where newsId = ?";
	db.query(sql,[data, id], function(err, data){
		if(err){
			resolve(err);
		}else{
			resolve(data);
		}
	});
  });
};

exports.updateNewsImage = function(data,id) {
  return new Promise(function(resolve, reject) {
  	let sql = "UPDATE news set ? where newsId = ?";
	db.query(sql,[data, id], function(err, data){
		if(err){
			resolve(err);
		}else{
			resolve(data);
		}
	});
  });
};

exports.deleteNewsItem = function(id) {
  return new Promise(function(resolve, reject) {
  	let sql = "DELETE from news where newsId = ?";
	db.query(sql, [id], function(err, data){
		if(err){
			resolve(err);
		}else{
			resolve(data);
		}
	});
  });
};

exports.getNewsById = function(newsId) {
  return new Promise(function(resolve, reject) {
  	let sql = "SELECT * from news where newsId=?";
	db.query(sql,[newsId], function(err, data){
		if(err){
			reject(err);
		}else{
			resolve(data);
		}
	});
  });
}


exports.getAllNewsItems = function(orderType) {
const type = 'desc';
if(!orderType){
	orderType = type;
}	
  return new Promise(function(resolve, reject) {
  	let sql = "SELECT *,DATE_FORMAT(published_at,'%d-%m-%Y') AS publishedDate from news order by published_at "+ orderType;
	db.query(sql, function(err, data){
		if(err){
			reject(err);
		}else{
			resolve(data);
		}
	});
  });
}

/**
 * uploads an poster image
 * 
 *
 * Image file to upload
 * returns ApiResponse
 **/
exports.uploadNewsFile = function(body) {
const newsId = body.newsId ? body.newsId : '';
const imgUrl = body.urlToImage ? body.urlToImage:'';			
  return new Promise(function(resolve, reject) {
    let sql = "UPDATE news set ? where newsId = ?";
	db.query(sql,[body, newsId], function(err, data){
		if(err){
			resolve(err);
		}else{
			resolve(imgUrl);
		}
	});
  });
}


