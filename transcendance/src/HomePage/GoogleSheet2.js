
import React, { useState ,useEffect} from "react";
import HomePage, { HomePageImage,BorderBL,BorderBR,BorderTL,BorderTR} from "./HomePage.style";
let SHEET_ID = '1AESw7GvFC53W6NUSgiSNw9RhgjyeOn2a5TW7hyTeac8'
let SHEET_TITLE = 'Transcendance';
let SHEET_RANGE = 'D2:D10'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

const HomeGallery = () => {
    const [rows,setRows] = useState([]);
    
    useEffect(()=>{
      console.log("hi")
      fetch(FULL_URL)
      .then(res => res.text())
      .then(rep => {
          let data = JSON.parse(rep.substr(47).slice(0,-2));
          setRows(data.table.rows);
          console.log(rows);
      })
    },[]);

return (
    <HomePage>
      <BorderTL></BorderTL>
      <HomePageImage src={"https://drive.google.com/uc?export=view&id="+rows[0].c[0].v} alt="drive image"></HomePageImage>
      <BorderTR></BorderTR>
      <HomePageImage src={"https://drive.google.com/uc?export=view&id="+rows[1].c[0].v} alt="drive image"></HomePageImage>
      <BorderBL></BorderBL>
      <HomePageImage src={"https://drive.google.com/uc?export=view&id="+rows[2].c[0].v} alt="drive image"></HomePageImage>
      <BorderBR></BorderBR>
      <HomePageImage src={"https://drive.google.com/uc?export=view&id="+rows[3].c[0].v} alt="drive image"></HomePageImage>
      {/* {(rows)?rows.map(item=>
      {return(
          <div>
            <Border></Border>
            <HomePageImage src={"https://drive.google.com/uc?export=view&id="+item.c[0].v} alt="drive image"></HomePageImage>
          </div>
       )}
      ):null} */}
    </HomePage>
  );
}

export default HomeGallery;