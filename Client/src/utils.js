import axios from 'axios';

export const formatDate = (strDate,format)=>{
	let completeDate = '';
	if( strDate !== '0000-00-00' ) {
		const a = new Date(strDate);
		let year = a.getFullYear();
		let month = a.getMonth()+1;
		let date = a.getDate();
		let hour = a.getHours();
		let min = a.getMinutes();
		let sec = a.getSeconds();
		
		completeDate = date + '/' + month + '/' + year;

		if(format ==='YYYY-MM-DD'){
			completeDate = year + '-'+month +'-'+ date;	
		}
		if(format ==='DD-MM-YYYY'){
			completeDate = date + '-' + month + '-' + year;
		}
	}
	return completeDate;
};

export const fileUpload = (file,news) => {
	const url = 'http://localhost:8080/uploadNewsFile';
	const formData = new FormData();
	formData.set('author', news.author);
	formData.set('description', news.description);
	formData.set('published_at', news.published_at);
	formData.set('title', news.title);
	formData.set('newsId', news.newsId);
	formData.append('newsfile',file)
	const config = {
	    headers: {
	        'content-Type':'multipart/form-data',
	    }
	}
	const data = axios.post(url,formData, config).then(resp => { return resp.data })
	  .then( res => {
	    return res;
	  } )
	  .catch( err => {
	    return err;
	  } );
	return data;  
}