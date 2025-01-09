"use client";

import Leftside from "./Leftside";
import Rightside from "./Rightside";
import { Magnifier } from "@/icons/Magnifier";
import { Circle } from "@/components/Circle";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [weather, setWeather] = useState([]);
  const [changecity, setChangecity] = useState("Ulanbator");
  const [date, setDate] = useState([]);
  const [Rweather, setRWeather] = useState([]);
  const [condition, setCondition] = useState([]);
  const [Rcondition, setRCondition] = useState([]);

  async function getweather(city) {
    const result = await fetch(
      ` https://api.weatherapi.com/v1/forecast.json?key=93623ee9ef034775b2d15223250901&q=${city}`
    );
    const data = await result.json();
    console.log(data);
    setChangecity(city);
    setWeather(data.forecast.forecastday[0].day.maxtemp_c);
    setRWeather(data.forecast.forecastday[0].day.mintemp_c);
    setDate(data.forecast.forecastday[0].date);
    setCondition(data.forecast.forecastday[0].day.condition.text);
    setRCondition(data.forecast.forecastday[0].day.condition.text);
  }

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }
  useEffect(() => {
    getData();
    getweather("Ulaanbaatar");
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };
  return (
    <div className="flex relative  size-full">
      <div className="size-full absolute justify-center items-center flex">
        <Circle />
      </div>{" "}
      <Leftside
        weather={weather}
        getweather={getweather}
        changecity={changecity}
        setSearched={setSearched}
        date={date}
        setDate={setDate}
        condition={condition}
        setCondition={setCondition}
      />
      <div className="absolute  bg-white flex flex-col left-[7vw] top-[7.5vh] w-[40vw] h-[7.8vh] rounded-full ">
        <div>
          <div className="w-[30px] h-[30px] top-6  left-5 absolute">
            <Magnifier />
          </div>

          <input
            className=" outline-none  ml-16 mt-3 w-[280px] h-[60px]"
            type="enabled"
            placeholder="Search"
            name=""
            id=""
            onChange={searchHandler}
          />
        </div>
        <div className="bg-gray-100 absolute  mt-24 ml-10 truncate ">
          {searched.length > 0 &&
            searched.slice(0, 10).map((city, index) => (
              <p
                className="cursor-pointer  font-bold text-gray-900 text-4xl"
                key={index}
                onClick={() => getweather(city)}
              >
                {city}{" "}
              </p>
            ))}
        </div>
      </div>
      <Rightside
        Rweather={Rweather}
        getweather={getweather}
        changecity={changecity}
        setSearched={setSearched}
        date={date}
        setDate={setDate}
        Rcondition={Rcondition}
        setRCondition={setRCondition}
      />
    </div>
  );
}
