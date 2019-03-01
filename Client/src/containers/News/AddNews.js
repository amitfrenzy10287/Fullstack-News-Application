import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../store/actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate, fileUpload } from '../../utils';
import DatePicker from 'react-date-picker';

import {
	NewsRow,
	NewsPanel,
	NewsColumn,
	EditPanel,
	CommonStyles,
	Button,
	TextField,
	TextArea,
	ImageCover
} from './style';

class AddNews extends Component{
	state={
		controls:{
			"author": "",
			"title": "",
			"description": "",
			"urlToImage": "",
			"published_at": "",
		},
		date: new Date(),
		image:'',
		file:'',
	}
	changeDate=(date)=>{
		const data = [];
		data['published_at'] = formatDate(date,'YYYY-MM-DD');
		const controls = {...this.state.controls, ...data};
		this.setState({date,controls});
	}
	
	changeHandler=(e,type)=>{
		const data = [];
		data[type] = e.target.value;
		const controls = {...this.state.controls, ...data};
		this.setState({controls});
	}
	
	handleSaveNews = async ()=>{
		const controls = this.state.controls;
		const news = {...controls};
		const { saveNewsItem } = this.props;
		await saveNewsItem( news );
		this.handleCancelNews();	
	}
	handleCancelNews =()=>{
		this.props.history.push("/news");
	}
	onFormSubmit=(e,news)=>{
	    e.preventDefault();
	    const file = this.state.file;
	    const controls = this.state.controls;
	    fileUpload(file,controls).then((response)=>{
	      const image = response.urlToImage ? response.urlToImage:'';
	      const data = [];
	      data['urlToImage'] =image;
	      const controls = {...this.state.controls, ...data};
	      this.setState({controls,image});
	    })
	}
	onChange=(e)=> {
	  this.setState({file:e.target.files[0]})
	}

	render(){
		return(
			<NewsPanel>
				<NewsRow>
						<NewsColumn>
							<b>AUTHOR</b>
						</NewsColumn>
						<NewsColumn>
							<b>TITLE</b>
						</NewsColumn>
						<NewsColumn>
							<b>DESCRIPTION</b>
						</NewsColumn>
						<NewsColumn>
							<b>COVER IMAGE</b>
						</NewsColumn>
						<NewsColumn>
							<b>PUBLISHED AT</b>
						</NewsColumn>
						<NewsColumn>
							<b>ACTION</b>
						</NewsColumn>
					</NewsRow>
				<NewsRow> 
					<NewsColumn> 
						<TextField type="text"
						value={this.state.controls.author}
						onChange={(e)=>this.changeHandler(e,"author")}
						/>
					</NewsColumn>
					<NewsColumn> 
						<TextField type="text"
						value={this.state.controls.title}
						onChange={(e)=>this.changeHandler(e,"title")}
						/>  
					</NewsColumn>
					<NewsColumn> 
						<TextArea rows='3' cols='35' type="text"
						value={this.state.controls.description}
						onChange={(e)=>this.changeHandler(e,"description")}
						/> 
					</NewsColumn>
					<NewsColumn>
						<form onSubmit={(e)=>this.onFormSubmit(e)}>
						<TextField type="file" name='newsfile' onChange={this.onChange} />
						<Button type="submit">Upload</Button>
						</form> 
						{ this.state.image ? <img src={ this.state.image } height="50px" width="50px" />:''} 
					</NewsColumn>
					<NewsColumn> 
						<DatePicker
					          onChange={this.changeDate}
					          value={this.state.date}
					        />
					</NewsColumn>
					<NewsColumn> 
						<Button  onClick={()=>this.handleCancelNews()}>Cancel</Button>  
						<Button onClick={(e)=>this.handleSaveNews()}>Save</Button>
					</NewsColumn> 
				</NewsRow>
			</NewsPanel>
		);
	}
}
const mapDispatchToProps = dispatch => {	
  return {
    saveNewsItem: ( news ) => dispatch(actions.saveNewsItem( news )),
  };
};

export default connect( null, mapDispatchToProps )( AddNews );