import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa"

export const Container = styled.header`
      width: 100vw;
      position: fixed;
      height: 60px;
      top: 0;

      background-color: #FE0000;

        display: flex;
        align-items: center;
        justify-content: space-between;
        
    > input{
        width: 800px;
        height: 50px;

        border-radius: 6px;
        border: none;
        font-size: 22px;
        padding-left: 10px;
    }
      > img {
          width: 120px;
          margin-left: 10px;
      }

      
`;
export const IconSignOut = styled(FaSignOutAlt)`
    color: white;
    margin-right: 90px;
    font-size: 45px;

    cursor: pointer;

    :hover{
    transform: rotate(360deg);
    transition: .1s;
}

`;
