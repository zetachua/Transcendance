import React, { useState ,useEffect} from "react";
import { BorderContainer,Border } from "./HomePage.style";
const HomePage = () => {

    let items=['1','2','3','4'];
    return(
        <div>
            <BorderContainer>
                {items.map((value, index) => {
                    // return <Border></Border>
                })}
            </BorderContainer>
        </div>
    );
}
export default HomePage;