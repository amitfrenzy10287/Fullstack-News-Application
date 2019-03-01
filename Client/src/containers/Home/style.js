import styled from 'styled-components'

export const Card = styled.div`
	position: relative;
	background-color:#fff;
	display:inline-block;
	width:calc(49% - 10px);
	box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
	margin:10px;
	border-radius:4px;
	min-height:200px;
	height:100%;
	@media (max-width: 999px) {
	    display: block;
	    width:calc(100% - 20px);
	    margin:10px 10px 10px 10px;
	}
`

export const CardInsider = styled.div`
	display: flex;
  	flex-wrap: nowrap;
`

export const CoverPic = styled.div`
	display: inline-block;
	background-image: ${(props) => props.url ? `url(${props.url})` : 'linear-gradient(to bottom,#686868,#f2f2f2,#f6e4e4)'};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	min-height:200px;
	width:150px;
	border-top-left-radius: 4px;
	cursor:pointer;
`;

export const CardBody = styled.div`
	display:inline-block;
	font-size:14px;
	width: calc(100% - 160px);
	cursor:pointer;
	height:auto;
	padding: 10px;
`

export const CardFooter = styled.div`
	border-top: 1px solid rgba(0,0,0,.1);
  font-size: 16px;	
  line-height: normal;
  width: 100%;
  background-color: transparent;
  padding: 20px;
  box-sizing: border-box;
  vertical-align: baseline;
  cursor:pointer;
  text-align: left;
`

export const CardWrapper = styled.a`
	text-decoration:none;
`

export const Title = styled.p`
	font-size: 20px;
	color:#b20000;
	font-weight: bold;
	text-align: left;
	padding: 0;
	margin: 0 0 20px 0;
`;

export const Description = styled.div`
  display:block;
  color:#727272;
	font-size: 16px;
	font-weight: normal;
	text-align: left;
	padding: 0;
	margin: 0 0 20px 0;
`;