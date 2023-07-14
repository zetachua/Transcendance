import styled from 'styled-components';

const HomePage = styled.div`
    display:grid;
    height:100vh;
    grid-template-rows: auto;
    grid-template-columns:repeat(3, minmax(0, 1fr));
    background-color:#E6E6E6;
    text-align:center;
    justify-content:center;
    @media (max-width:800px){
        display:flex;
        flex-direction:column;
        height:200vh;
    }
`;

export const TranscendanceLogo =styled.img`
    width:35%;
`;
export const HomePageImage = styled.img`
    border:2px solid #E6E6E6;
    width:80%;
    &:hover{
        z-index:5;
        filter:blur(0px);
    }
`;

export const Border=styled.div`
    display:flex;
    position:absolute;
    width:80%;
    height:100%;
    margin-left:2rem;
    &:hover {
        border:2px solid black ;
        transform: rotate(5deg);
        z-index:1;
        // border-color:#B3B3B3;
    }
    @media (max-width:800px){
        width:0%;
        height:0%;
        margin-left:0rem;
    }
`;

export const FakeBorder=styled.div`
    display:flex;
    position:absolute;
    width:34%;
    height:34%;
    padding:2px;
`;

export const BorderContainer=styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#E6E6E6;
`;

export const HomePageText=styled.div`
    text-align:center;
`;

export const Container =styled.div`
    position:relative;
    margin:auto;
    z-index:1;
    &:hover{
    }    
`;


export default HomePage;