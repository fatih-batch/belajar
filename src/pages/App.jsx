import { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action";

import logo from '../assets/logo.svg';

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("almas")
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    getData();
  },[])

  const getData = () => {
    let token = 'c9d1cd04dcdc200a84cecf1924254061';
    
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${token}&language=en-US&page=1`)
    .then((res) => {
      let data =  res.data.results;
      setData(data);
      dispatch(reduxAction("getFavorites", data));
      console.log(favorites);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className='container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-5' style={{gap: '20px'}}>
        {data.map((item) => {
          return (
              <div key={item.id}>
                <Card film={item} title={title}/>
              </div>
          );
        })}
    </div>
  );
}

export default App;
