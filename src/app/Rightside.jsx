import { Moon } from "../icons/Moon";
import Rmood from "../components/Rmood";

export default function Rightside({
  Rweather,
  changecity,
  date,
  Rcondition,
  Rmod,
  setRMod,
}) {
  const Right = { Rweather, changecity, date, Rcondition, Rmod, setRMod };
  const weatherIconRight = () => {
    const Icons = Rcondition.toLowerCase();
    switch (true) {
      case Icons.includes("mist"):
        return <img src="/Nclouds.png" alt="" />;
    }
    switch (true) {
      case Icons.includes("sunny"):
        return <img src="/Nclouds.png" alt="" />;
    }
    switch (true) {
      case Icons.includes("cloud"):
        return <img src="/Nclouds.png" alt="" />;
    }
    switch (true) {
      case Icons.includes("rain"):
        return <img src="/Nrain.png" alt="" />;
    }
    switch (true) {
      case Icons.includes("snow"):
        return <img src="/Nsnow.png" alt="" />;
    }
    switch (true) {
      case Icons.includes("wind"):
        return <img src="/Nwind.png" alt="" />;
    }
    switch (true) {
      case Icons.includes("clear"):
        return <img src="/Moon.png" alt="" />;
    }
    switch (true) {
      case Icons.includes("thunder"):
        return <img src="/Nstorm.png" alt="" />;
    }
  };
  return (
    <div className=" bg-[#0F141E]  w-[50vw] h-[100vh] rounded-[20px]">
      <div className=" relative m-auto mt-40 w-[350px] h-[800px]">
        <div className="absolute -bottom-10 -right-28">
          <Moon />
        </div>
        <div className=" relative bg-[rgba(17,24,39)] backdrop-blur-3xl flex  size-full w-[400px] flex-col rounded-[50px] ">
          <p className=" text-gray-400 bg-#9CA3AF mt-[34px] ml-[38px] font-medium text-[20px]">
            {date}
          </p>
          <div className="flex justify-between">
            <h1 className="text-white text-[50px] ml-4 font-bold flex">
              {changecity}
            </h1>
            <svg
              className="mr-6 mt-5 ml-8"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          {weatherIconRight(Rcondition)}
          <div className="h-[120px] ml-[40px]">
            <h2 className="text-white text-8xl  bg-gradient-to-b from-slate-800 to-gray-300 inline-block text-transparent bg-clip-text">
              {Rweather}°C
            </h2>
          </div>
          <p className=" text-blue-800 text-2xl ml-[40px]">{Rcondition}</p>
          <div className="flex justify-between m-auto w-[318px] h-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
