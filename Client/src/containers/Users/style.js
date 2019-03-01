import styled from 'styled-components';

export const Container = styled.div`
	position:relative;
	width: 40%;
	margin-left: 30%;
	margin-top: 5%;
	box-shadow: #ccc 2px 2px 4px;
	border-radius: 4px;
	border: solid 1px #ccc;
	background-color: #fff;
	min-height:300px;
	@media(max-width:1000px){
		padding:10px;
		width: 96%;
    	margin-left:0;
	    margin-top: 5%;
	}
	& label {
		width: 90px;
		display: inline-block;
		padding: .5em;
		margin: 5px;
		font-style: normal;
		font-weight: bold;
		text-align: right;
	}
	& input{
		display: inline-block;
		width: 380px;
		border:solid 1px #ccc;
		outline:0;
		line-height: 32px;
		font-size: 18px;
		height: 30px;
		padding: 0.5em;
		font-style:normal;
		margin: 5px;
		border-radius:4px; 
		&:focus{
			outline:0;
			border:solid 1px #919191;
		}
		@media(max-width:1000px){
			width: 95%;
		}
	}
`;

export const ButtonWrapper= styled.div`
	text-align:center;
`;

export const Button = styled.button`
	background-color: #0012ff;
    padding: 1em 3em 1em 3em;
    border: 0;
    margin: 0.5em;
    text-align: center;
    font-style: normal;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    @media(max-width:1000px){
		margin:0;
		width:100%;
	}
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

export const Heading = styled.h1`
	text-align:center;
	display: block;
	font-style: bold;
	font-size: 22px;
`;

export const LoginWrapper = styled.div`
	margin-top: 2em;
`;

export const MessageBox = styled.div`
    text-align: center;
    color: #fa0000;
    background-color: #23f2;
    padding: 20px;
    border-radius: 4px;
    margin: 10px;
`;