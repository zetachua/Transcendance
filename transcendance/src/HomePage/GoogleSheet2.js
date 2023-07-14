
import React, { useState ,useEffect} from "react";
import HomePage, { HomePageImage,Border,Container,TranscendanceLogo} from "./HomePage.style";
let SHEET_ID = '1AESw7GvFC53W6NUSgiSNw9RhgjyeOn2a5TW7hyTeac8'
let SHEET_TITLE = 'Transcendance';
let SHEET_RANGE = 'D2:D10'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

const HomeGallery = () => {
    const [rows,setRows] = useState([]);
    
    useEffect(()=>{
      console.log("hi")
      getPics();
    },[]);

    async function getPics(){
      fetch(FULL_URL)
      .then(res => res.text())
      .then(rep => {
          let data = JSON.parse(rep.substr(47).slice(0,-2));
          setRows(data.table.rows);
          console.log(rows);
      })
    }
    if(rows.length==0){
      console.log("not loaded yet")
      return(<div>Loading</div>);
    }
    else{
      console.log(rows, rows.length==0);
      return (
        <HomePage>
          <Container>
            <Border></Border>
            <HomePageImage src={"https://drive.google.com/uc?export=view&id="+rows[0].c[0].v} alt="drive image"></HomePageImage>
          </Container>
          <a href="#" style={{margin:'auto',textDecoration:'none',color:'black'}}><h4 style={{color:"#6B6A6B", }}>CREATIONS</h4></a>
          <Container>
            <Border></Border>
            <HomePageImage src={"https://drive.google.com/uc?export=view&id="+rows[1].c[0].v} alt="drive image"></HomePageImage>
          </Container>
          <a href="#" style={{margin:'auto',textDecoration:'none',color:'black'}}><h4 style={{color:"#6B6A6B"}}>GALLERY</h4></a>
          <HomePageImage style={{width:'90%', margin:'auto'}}src={"https://drive.google.com/uc?export=view&id="+rows[4].c[0].v} alt="drive image"></HomePageImage>
          <a href="#" style={{margin:'auto',textDecoration:'none',color:'black'}}><h4 style={{color:"#6B6A6B"}}>BIOGRAPHY</h4></a>
          <Container>
            <Border></Border>
            <HomePageImage src={"https://drive.google.com/uc?export=view&id="+rows[3].c[0].v} alt="drive image"></HomePageImage>
          </Container>
         <a href="#" style={{margin:'auto',textDecoration:'none',color:'black'}}><TranscendanceLogo src="/transcendanceLogo.PNG"></TranscendanceLogo></a>
          <Container>
            <Border></Border>
            <HomePageImage src={"https://drive.google.com/uc?export=view&id="+rows[2].c[0].v} alt="drive image"></HomePageImage>
          </Container>
      </HomePage>
    
      );
    }
}

export default HomeGallery;