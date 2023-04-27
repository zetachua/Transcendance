import styled from 'styled-components';

const HomePage = styled.div`
    display:grid;
    max-width:100%;
    height:100vh;
    grid-template-rows: auto;
    grid-template-columns:repeat(3, minmax(0, 1fr));
    background-color:#E6E6E6;
    text-align:center;
    justify-content:center;
    @media (max-width:800px){
        display:flex;
        flex-direction:column;
    }
`;

export const TranscendanceLogo =styled.img`
    width:40%;
`;
export const HomePageImage = styled.img`
    border:2px solid #E6E6E6;
    width:90%;
    &:hover{
        z-index:5;
        filter:blur(0px);
    }
`;

export const Border=styled.div`
    display:flex;
    position:absolute;
    width:98%;
    height:95%;
    &:hover {
        border:2px solid black ;
        transform: rotate(5deg);
        z-index:1;
        border-color:#B3B3B3;

    }
    @media (max-width:800px){
        width:0%;
        height:0%;
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
    gap:18rem;
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