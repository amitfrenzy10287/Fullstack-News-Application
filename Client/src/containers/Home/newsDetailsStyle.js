import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	background-color: #fff;
	display: inline-block;
	width: 80%;
	box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
	margin: 1% 10% 0 10%;
	min-height: 700px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	height: auto;
	font-family: "Montserrat", sans-serif;
	font-smoothing: antialiased;
	background-color: #fac564;
	background-image: url(/static/paper.jpg);
	@media (max-width: 999px) {
		width: 100%;
		margin: 0;
		border-radius: 0px;
		box-shadow: none;
		background-size: auto;
		margin-left: 0;
		padding:0px;
	}
`

export const Title = styled.h1`
    text-align: center;
    font-family: 'Sancreek', cursive;
`

export const Description = styled.div`
	font-style: inherit;
    font-size: x-large;
    text-align: center;
    padding: 16px;
`

export const ArticleImageWrap = styled.div`
	background-image:url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;
    object-fit: contain;
    display: inline-block;
    width: 100%;
    height: 400px;
    border-radius: 3px;
	background-color: #000;
	@media (max-width: 999px) {
	    display: block;
	    box-shadow:none;
	    background-size: 100%;
	    text-align:center;
	    margin-left: 0;
	    max-width:  none;
	}
`;

export const SourceWrapper = styled.div`
	text-align: center;
	color: #000;
	font-size: 16px;
	font-weight: normal;
	padding: 10px;
`;

export const ELegantShadow = styled.h1`
	font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	text-rendering: optimizeLegibility;
  
	color: #e0dfdc;
	letter-spacing: .1em;
	text-shadow: 
	0 -1px 0 #fff, 
	0 1px 0 #2e2e2e, 
	0 2px 0 #2c2c2c, 
	0 3px 0 #2a2a2a, 
	0 4px 0 #282828, 
	0 5px 0 #262626, 
	0 6px 0 #242424, 
	0 7px 0 #222, 
	0 8px 0 #202020, 
	0 9px 0 #1e1e1e, 
	0 10px 0 #1c1c1c, 
	0 11px 0 #1a1a1a, 
	0 12px 0 #181818, 
	0 13px 0 #161616, 
	0 14px 0 #141414, 
	0 15px 0 #121212, 
	0 22px 30px rgba(0, 0, 0, 0.9);  
`;

export const ArticleDescription = styled.em`
	text-align:center;
	font-family: 'EB Garamond', serif;
	font-size: 28px;
	letter-spacing: 0.1em;
	display: block;
	font-style:normal;
	padding-top: 0.1em;
	text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
	&::before, &::after {
	content: "§";
	display: inline-block;
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	transform: rotate(90deg);
	opacity: 0.2;
	margin: 0 0.6em;
	font-size: 40px;
	}
`;

export const InsetShadow =  styled.h1`
	font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	text-rendering: optimizeLegibility;
	color: #fff;
    letter-spacing: .1em;
    text-shadow: 
      -1px -1px 1px #111, 
      2px 2px 1px #363636;
`;

export const SearchWrapper = styled.div`
  display:inline-block;
  width:100%;
  text-align:center;
  height: 100px;
  padding-top:50px;
  background-image: linear-gradient(to right,#ff8c8c,#f2f2f2,#f6e4e4,#f2f2f2,#ef5b5b);
`;

export const SearchBody = styled.div`
  position: relative;
  display:block;
  width:100%;
  text-align:center;
  min-height:600px;
  height:auto;
  background-image: linear-gradient(to right,#ff8c8c,#f2f2f2,#f6e4e4,#f2f2f2,#ef5b5b);
`

export const SearchButton = styled.button`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #980000;
  padding: 17px;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  cursor:pointer;
  border:none;
  &:focus{
    border:none;
    text-decoration:none;
  }
`

export const TextField = styled.input`
  width:20%;
  padding: 16px;
  color: #383e39;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  border: solid 1px ${props => props.borderColor || '#eaeaea'};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  background-color: #ffffff;
  outline: 0;
  @media(max-width:999px){
    width:50%;
  }
  & :focus {
      outline: 0;
      border-radius: 6px;
      color: ${props => props.color || '#383e39'};
      border: solid 1px ${props => props.borderColor || '#919191'};
  }
  &::placeholder {
    color: #383e39;
    opacity: 1;
  }

`;