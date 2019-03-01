import styled from 'styled-components';

export const NewsRow = styled.div`
	display:flex;
	@media(max-width:1000px){
		display: block;
	}
`;

export const NewsPanel = styled.div`
	position: relative;
	display: block;
	margin-top:10px;
    width: 94%;
    margin-left: 5%;
	overflow-x: auto;
	@media( max-width: 1000px ) {
		width:100%;
		margin:0;
		padding:0;
		overflow-x: auto;
	}
`; 
export const NewsColumn = styled.div`
	display: block;
	padding: 5px;
	border: solid 1px #ccc;
	width:15%;
	word-break: break-all;
    background-color: #fff;
	@media(max-width:1000px){
		width:100%;
		text-align:center;
	}
`;

export const TextField = styled.input.attrs({
  type: 'text',
  placeholder: props => props.placeholder || 'Start typing here...',
})`
	display: block;
	width: 87%;
	border: solid 1px #ccc;
	outline: 0;
	line-height: 32px;
	font-size: 16px;
	height: 30px;
	padding: 0.2em;
	font-style: normal;
	margin: 5px;
	border-radius: 4px; 
	&:focus{
		outline: 0;
		border: solid 1px #919191;
	}
	@media(max-width:1000px){
		width: 94%;;
	}
`;

export const TextArea = styled.textarea`
	display: inline-block;
	width: 87%;
	border: solid 1px #ccc;
	outline: 0;
	line-height: 32px;
	font-size: 16px;
	padding: 0.2em;
	font-style: normal;
	margin: 5px;
	border-radius: 4px; 
	&:focus{
		outline: 0;
		border: solid 1px #919191;
	}
	@media(max-width:1000px){
		width: 94%;
	    margin-left: -12px;
	}
`;

export const EditPanel = styled.div`
	position:relative;
	border-radius:3px;
	box-shadow: #ccc 2px 2px 4px;
	height: 400px;
	margin-top:50px;
	text-align:center;
`;
export const Button = styled.button`
	display:inline-block;
	background-color: ${(props)=>props.color ? '#0012ff' :'#0012ff'};
    padding: 0.5em 1em 0.5em 1em;
    border: 0;
    margin: 0.5em 0.5em 0.5em 0;
    text-align: center;
    font-style: normal;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    &:hover{
    	background-color: #000cae;
    	border:0;
    	outline:0;
    } 
    &:focus {
    	border:0;
    	outline:0;
    }
`;
export const ImageCover = styled.img`
	height:80px;
	width:80px;
	border-radius:3px;
	@media(max-width:1000px){
		height:50px;
		width:50px;
	}
`;
export const CommonStyles = {
	show:{
		display:'block',
	},
	hide:{
		display:'none',
	}
};