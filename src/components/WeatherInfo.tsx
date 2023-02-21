import React from "react";
import useStore from "../store/store";
import { Weather } from "../store/store";
const WeatherInfo = () => {
  const { weather } = useStore();
  const wet = weather as Weather;
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-6xl text-gray-900">
          {" "}
          {wet.name.toUpperCase()} ,{wet.sys.country.toUpperCase()}
        </h1>
      </div>
      <div className="flex items-center">
        <p className="md:text-6xl text-3xl">{wet.main.temp}°C</p>
        <img
          src={`http://openweathermap.org/img/wn/${wet.weather[0].icon}@2x.png`}
          alt={wet.weather[0].description}
        />
      </div>
      <div className=" max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full px-5 gap-6">
        <div className="bg-primary font-bold flex items-center justify-between gap-2 p-4 rounded-md">
          <i className="fa-solid fa-wind text-2xl "></i>
          <p className="text-gray-600 ">
            Wind Speed <br />{" "}
            <span className="text-3xl">{wet.wind.speed}km/h</span>
          </p>
        </div>

        <div className="bg-primary font-bold flex items-center justify-between gap-2 p-4 rounded-md">
          <i className="fa-solid fa-droplet text-2xl"></i>
          <p className="text-gray-600 ">
            Humidity
            <br /> <span className="text-3xl">{wet.main.humidity}%</span>
          </p>
        </div>

        <div className="bg-primary font-bold flex items-center justify-between gap-2 p-4 rounded-md">
          <i className="fa-solid fa-cloud text-2xl"></i>
          <p className="text-gray-600 ">
            Pressure <br />{" "}
            <span className="text-3xl">{wet.main.pressure}Pa</span>
          </p>
        </div>

        <div className="bg-primary font-bold flex items-center justify-between gap-2 p-4 rounded-md">
          <i className="fa-solid fa-temperature-quarter text-2xl"></i>
          <p className="text-gray-600 ">
            Feels Like
            <br /> <span className="text-3xl">{wet.main.feels_like}°C</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
