import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../store/actions';
import { Link,Router } from 'react-router-dom';
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

class Home extends Component{
	state={
		controls:{
			"author": '',
			"title": '',
			"description": '',
			"urlToImage": '',
			"published_at": '',
		},
		date: new Date(),
		current:'',
		images:[],
		newsAdded:'',
		file:'',
		sort: 1,
	};

	componentDidMount(){
		const {getAllNews,auth}= this.props;
		if(!auth.authdata){
			this.props.history.push('/');
		}
		getAllNews(this.state.sort);
	}

	changeHandler=(e,type,date)=>{
		const data = [];
		data[type] = e.target.value;
		const controls = {...this.state.controls, ...data};
		this.setState({controls});
	}

	changeDate=(date)=>{
		const data = [];
		data['published_at'] = formatDate(date,'YYYY-MM-DD');
		const controls = {...this.state.controls, ...data};
		this.setState({date,controls});
	}

	handleEditNews=( news ) => {
		const controls = {
		  "author": news.author,
		  "title": news.title,
		  "description": news.description,
		  "urlToImage": news.urlToImage,
		  "published_at": formatDate(this.state.date,'YYYY-MM-DD'),
		};
		this.setState({
			controls,
			current: news.newsId
		});
	}
	handleSaveNews = (newsId)=>{
		const controls = this.state.controls;
		const token = this.props.auth.token ? this.props.auth.token :'';
		const news = {...controls,newsId,token};
		const { saveNewsItem } = this.props;
		saveNewsItem( news, token );
		this.setState({current : ''});
	}
	handleDeleteNews= (newsId)=>{
		let res = window.confirm("Are you sure you want to delete this news?");
		const { deleteNews } = this.props;
		if(res){
			deleteNews(newsId); 
		}
	}
	addNewNews=(e)=>{
		this.props.history.push("/addNews");
	}

	onFormSubmit=(e,news)=>{
	    e.preventDefault();
	    const file = this.state.file;
	    fileUpload(file,news).then((response)=>{
	      const images =[];
	      images[news.newsId] = response.urlToImage ? response.urlToImage:'';
	      this.setState({images});
	    });
	}
	onChange=(e)=> {
	  this.setState({file:e.target.files[0]})
	} 

	sortByDate = async ()=>{
		const { news,getAllNews } = this.props;
		const sort = this.state.sort === 1 ? 0 : 1;
		await getAllNews(sort);
		this.setState({sort});
	}

	render(){
		const {news} = this.props;
		const allNewsItems = news && Object.keys(news).map((key)=>{
			const id = news[key].newsId;
			return(
				<NewsRow key={key}>
					<NewsColumn>
						<div style={this.state.current === id ? CommonStyles.show : CommonStyles.hide}>
						<TextField type="text"
						value={this.state.controls.author}
						onChange={(e)=>this.changeHandler(e,"author")}
						/>
						</div>
						<div style={this.state.current === id ? CommonStyles.hide : CommonStyles.show}>
							{news[key].author}
						</div>
					</NewsColumn>
					<NewsColumn>
						<div style={this.state.current === id ? CommonStyles.show : CommonStyles.hide}>
							<TextField type="text"
							value={this.state.controls.title}
							onChange={(e)=>this.changeHandler(e,"title")}
							/>
							</div>
							<div style={this.state.current === id ? CommonStyles.hide : CommonStyles.show}>
							{news[key].title}
						</div>
					</NewsColumn>
					<NewsColumn>
						<div style={this.state.current === id ? CommonStyles.show : CommonStyles.hide}>
							<TextArea cols='35' rows='3' value={this.state.controls.description}
							onChange={(e)=>this.changeHandler(e,"description")}
							/>
						</div>
						<div style={this.state.current === id ? CommonStyles.hide : CommonStyles.show}>
							{news[key].description.substr(0, 25)+'...'}
						</div>
					</NewsColumn>
					<NewsColumn>
						<div style={this.state.current === id ? CommonStyles.show : CommonStyles.hide}>
							<form onSubmit={(e)=>this.onFormSubmit(e, news[key])}>
								<TextField type="file" name='newsfile' onChange={this.onChange} />
								<Button type="submit">Upload</Button>
							</form>
						</div>
							<ImageCover 
								src={this.state.images && this.state.images[news[key].newsId]
								? this.state.images[news[key].newsId] : news[key].urlToImage }
							/>
					</NewsColumn>
					<NewsColumn>
						<div style={this.state.current === id ? CommonStyles.show : CommonStyles.hide}>
							<DatePicker
					          onChange={this.changeDate}
					          value={this.state.date}
					        />
						</div>
						<div style={this.state.current === id ? CommonStyles.hide : CommonStyles.show}>
							{formatDate(news[key].published_at)}
						</div>
					</NewsColumn>
					<NewsColumn>
						<div style={this.state.current === id ? CommonStyles.hide : CommonStyles.show}>	
							<Button  onClick={()=>this.handleEditNews(news[key])}>Edit</Button>
						</div>
						<div style={this.state.current === id ? CommonStyles.show : CommonStyles.hide}>	
							<Button onClick={(e)=>this.handleSaveNews(news[key].newsId)}>Save</Button>
						</div>
						<Button 
						onClick={()=>this.handleDeleteNews(news[key].newsId)}>
						Delete
						</Button>
					</NewsColumn>
				</NewsRow>
			);
		});
		return(
			<div>
				<NewsPanel>
					<Button onClick={(e)=>this.addNewNews(e)}>Add News</Button>
					<Button onClick={()=>this.sortByDate()}>Sort by date</Button>
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
					{allNewsItems}
				</NewsPanel>
			</div>	
		);
	}
}
const mapStateToProps = state => {
  return {
    news: state.news.news,
    auth: state.auth,
    message: state.message,
  };
};

const mapDispatchToProps = dispatch => {	
  return {
    getAllNews: (sortType) => dispatch(actions.getAllNews(sortType)),
    saveNewsItem: ( news ) => dispatch(actions.saveNewsItem( news )),
    deleteNews: ( newsId ) => dispatch(actions.deleteNewsItem( newsId )),
    sortNewsByDate: ( news ) => dispatch(actions.fetchNewsSuccess(news)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);