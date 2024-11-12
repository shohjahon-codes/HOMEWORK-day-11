import React, { useEffect, useState } from 'react';
import { request } from '../config/request';
import 'boxicons'; 

export const Cards = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    request.get("/products")
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);
  const LikeIcon = () => {
    const [liked, setLiked] = useState(false);
  
    const toggleLike = () => {
      setLiked(!liked);
    };
  
    return (
      <div onClick={toggleLike} className="absolute top-4 right-4 cursor-pointer">
        <box-icon
          name="heart"
          type="solid"
          color={liked ? 'red' : 'gray'}
          size="24px"
        ></box-icon>
      </div>
    );
  };

  if (!data.length) return <div>Yuklanmoqda...</div>;

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
          <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
          <div className=" flex gap-[10px] p-4">
            <img src={item.logo} alt="" />
            <h2 className="text-lg font-bold">{item.name}</h2>
           
          </div>
          <LikeIcon />
        </div>
      ))}
    </div>
  );
};


