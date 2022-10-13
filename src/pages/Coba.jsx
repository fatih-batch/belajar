import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action";


function Coba() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    getData();
  },[])

  const getData = () => {
    console.log(favorites);
  }

  return (
    <div className='container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-5' style={{gap: '20px'}}>
        
    </div>
  );
}

export default Coba;
