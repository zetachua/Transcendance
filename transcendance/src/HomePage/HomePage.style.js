import styled from 'styled-components';

const HomePage = styled.div`
    display:flex !important;
    max-width:100%;
    flex-wrap:wrap !important;
    flex-direction:row !important;
    justify-content:space-between !important;
    background-color:#E6E6E6;
    padding:20px;
    gap:14rem;
`;

export const HomePageImage = styled.img`
    width:35%;
    border:2px solid #E6E6E6;
`;

export const BorderTL=styled.div`
    display:flex;
    position:absolute;
    width:34%;
    height:34%;
    border:2px solid #000;
    &:hover {
        border:2px solid black;
        transform: rotate(5deg);
    }
`;

export const BorderTR=styled.div`
    display:flex;
    position:absolute;
    right:20px;
    width:34%;
    height:34%;
    border:2px solid #000;
    &:hover {
        border:2px solid black;
        transform: rotate(5deg);
    }
`;

export const BorderBL=styled.div`
    display:flex;
    position:absolute;
    bottom:15px;
    width:34%;
    height:34%;
    border:2px solid #000;
    &:hover {
        border:2px solid black;
        transform: rotate(5deg);
    }
`;

export const BorderBR=styled.div`
    display:flex;
    position:absolute;
    bottom:15px;
    right:20px;
    width:34%;
    height:34%;
    border:2px solid #000;
    &:hover {
        border:2px solid black;
        transform: rotate(5deg);
    }
`;
export const BorderContainer=styled.div`
    display:flex;
    gap:18rem;
    justify-content:space-between;
    background-color:#E6E6E6;
`;
export default HomePage;