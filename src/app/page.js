import Image from "next/image";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import { Magnifier } from "@/icons/Magnifier";
import { Circle } from "@/components/Circle";

export default function Home() {
  return (
    <div className="flex relative  size-full">
      <Leftside />
      <div className="justify-center items-center flex">
        <Circle />
      </div>
      <div className="absolute  bg-white flex left-[7vw] top-[7.5vh] w-[40vw] h-[7.8vh] rounded-full ">
        <div className="w-[30px] h-[30px] top-6  left-5 absolute">
          <Magnifier />
        </div>
        <input
          className=" outline-none  ml-16 mt-3 w-[280px] h-[60px]"
          type="enabled"
          placeholder="Search"
          name=""
          id=""
        />
      </div>

      <Rightside />
    </div>
  );
}
