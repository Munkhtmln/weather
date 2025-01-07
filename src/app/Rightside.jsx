import { Moon } from "@/icons/Moon";

export default function Rightside() {
  return (
    <div className=" bg-[#0F141E]  w-[50vw] h-[100vh] rounded-[20px]">
      <div className=" relative m-auto mt-60 w-[350px] h-[800px]">
        <div className="absolute -bottom-10 -right-28">
          <Moon />
        </div>
        <div className=" relative bg-[rgba(17,24,39)] backdrop-blur-3xl flex  size-full w-[400px] rounded-[50px] ">
          card
        </div>
      </div>
    </div>
  );
}
