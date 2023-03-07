import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  var dataURL="0";
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/1a772eac-76e5-4db3-8597-f282e67e1da5"
      );
      const data = await res.json();
      console.log(data);
      dataURL= data[1].URL;
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (rowIndex) => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/1a772eac-76e5-4db3-8597-f282e67e1da5/${rowIndex}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedData = data.filter((_, i) => i !== rowIndex);
        setData(updatedData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {data?.map((item, i) => (
        <div>
         <img src={item.URL} alt="drive image"></img>
        </div>
      ))}
    </div>
  );
};

export default Home;