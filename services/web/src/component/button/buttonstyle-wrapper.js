import styled from "styled-components";
import baseCss from "../styles/configs";

const Wrapper = styled.div`
  .vegas-icon {
    color: #fff
    font-size: 10px;
    padding:2px 2px 5px 1px ;
    position: relative;
  }
  .vegas-icon-wrapper {
    position: relative;
    display:inline-block;
    height: 12px;
    min-width: 12px;
    background: ${baseCss.buttonBackGround}
    text-align: center;
    border-radius: 50%;
    
    margin:0 5px 0 0;
  }
  .vegas-icon-wrapper.right{
    margin:0 0 0 5px
  }
  
  .vegas-btn{
    line-height:12px;
    border:none;
    font-size:12px;
    font-weight:300;
    text-transform: uppercase; 
    cursor: pointer;
    margin:  3px ;
    color:${baseCss.buttonBackGround};
    background-color:#fff;
  }
  
`;

export default Wrapper;
