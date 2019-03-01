import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../store/actions';
import { Link, Router } from 'react-router-dom';
import { formatDate, fileUpload } from '../../utils';
import DatePicker from 'react-date-picker';

import {
	Card,
	CardInsider,
	CoverPic,
	CardBody,
	CardFooter,
	CardWrapper,
	Title,
	Description
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
		const { getAllNews }= this.props;
		getAllNews(this.state.sort);
	}

	handleArticleDetails=( news )=>{
		this.props.history.push({
		  pathname: '/newsdetails',
		  search: '',
		  state: { detail: news }
		});
	}

	render(){
		const {news} = this.props;
		const newsArticleList = news ? Object.keys(news).map((key)=>{
			return(
				<CardWrapper onClick={() => this.handleArticleDetails(news[key])}>
					<Card>
						<CardInsider>
							<CoverPic url={news[key].urlToImage} />
								<CardBody>
									<Title>{news[key].title}</Title>
									<Description>{news[key].description.substr(0, 200)+'...'}</Description>
									<small>{news[key].author}</small>
								</CardBody>
							</CardInsider>
						<CardFooter>Published Date : {formatDate(news[key].published_at,'DD-MM-YYYY')}</CardFooter>
					</Card>
				</CardWrapper>
			);
		}):'No records found!'; 
		return(
			<div>
				{newsArticleList}
			</div>	
		);
	}
}
const mapStateToProps = state => {
  return {
    news: state.news.news,
  };
};

const mapDispatchToProps = dispatch => {	
  return {
    getAllNews: (sortType) => dispatch(actions.getAllNews(sortType)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);