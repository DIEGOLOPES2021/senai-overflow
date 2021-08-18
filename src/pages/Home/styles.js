import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const GistIcon = styled(FaGithub)`
    font-size: 40px;
    
    cursor: pointer;
    transition: .2s;

    :hover{
        color: var(--primary);
    }
`;

export const Main = styled.main`
    margin-top: 60px;

    display: grid;
    grid-template-columns: 20% 60% 20%;

    > nav {
        width: 280px;
        height: 700px;
        background-color: black;
    }
`;

export const FeedContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 10px;
    padding: 10px;

    border: 1px dashed gray;
`;

export const Post = styled.article`
    width: 80%;
    min-height: 100px;
    padding: 10px;

    box-shadow: 0px 10px 10px rgba(0,0,0,0.25);

    > header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        > img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }

        > div {
            gap: 5px;    
            font-size: 18px;

            > p {
                font-size: 14px;
                color: var(--textGray);
            }
        }
     
    }
    > main{
            > div {
                >h1{
                    margin-top: 10px;
                    font-size: 22px;  
                }
                >p{
                    font-size: 18px;
                    margin-top: 18px;
                    margin-left: 12px ;
                    padding:  10px 0px 10px 12px;
                    color: var(--textGray);   
                border-left: 2px solid var(--primary);
                }
            }
            > img{
               width: calc(100% + 20px);
               margin-left: -10px;
               margin-top: 10px;
            }
            > section {
                display: flex;
                gap: 5px;

                > p {
                    padding: 5px;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
                }
            }
        }
        > footer{
            > h2{
                font-size: 18px;
                margin-top: 10px;
                transition: 0.2s;
                cursor: pointer;
                :hover{
                color: var(--primary)
            }
            
            }
        }
    
`;
   