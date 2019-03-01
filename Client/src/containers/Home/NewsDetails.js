import React, { Component } from 'react';

import { 
	Wrapper,
	Title,
	Description,
	ArticleImageWrap,
	SourceWrapper,
	ELegantShadow,
	ArticleDescription,
	InsetShadow
} from './newsDetailsStyle';

class NewsDetails extends Component{
	
	render(){
	
		const newsDetails = this.props.location.state
		 && this.props.location.state.detail
		 ? this.props.location.state.detail : '';
		 const author = newsDetails.author ? newsDetails.author : '';
		 const description = newsDetails.description ? newsDetails.description : '';
		 const publishedDate = newsDetails.publishedDate ? newsDetails.publishedDate : '';
		 const title = newsDetails.title ? newsDetails.title : '';
		 const urlToImage = newsDetails.urlToImage ? newsDetails.urlToImage : '';

		return(
			<Wrapper>
				<InsetShadow>{title}</InsetShadow>
				<ArticleDescription>{description}</ArticleDescription>
				{urlToImage ? 
					(<ArticleImageWrap image={urlToImage} />) : ''
				}
				<ELegantShadow>
					<small>{author}</small>
					<div>Published Date : {publishedDate}</div>
				</ELegantShadow>
			</Wrapper>
		);
	}
}

export default NewsDetails;	