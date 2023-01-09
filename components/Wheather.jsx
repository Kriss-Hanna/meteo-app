import Image from "next/image";
import React from "react";

const Wheather = ({data}) => {

  const farheneitToCelsius = (temp) => {
    return (temp - 32) / 1.8
  }

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">

      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
         <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
          alt="/" 
          width="100"
          height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>

       </div>

       <p className="text-9xl">{farheneitToCelsius(data.main.temp).toFixed(0)} &#176;</p>
      </div>


     {/*  Bottom */}

     <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Météo de {data.name}</p>
        <div className="flex text-center justify-between">
          <div>
            <p className="font-bold text-2xl">{farheneitToCelsius(data.main.feels_like).toFixed(0)}&#176;</p>
            <p className="text-xl">Température ressentie</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity} %</p>
            <p className="text-xl">Humidité</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} km/h</p>
            <p className="text-xl">Vents</p>
          </div>
        </div>
     </div>
  
    </div>
  );
};

export default Wheather;
