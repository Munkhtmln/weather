import { Sun } from "@/icons/Sun";

export default function Leftside() {
  return (
    <div className="bg-[#F3F4F6] w-[50vw] h-[100vh] rounded-[20px] ">
      <div className="relative w-[350px] h-[800px] m-auto mt-60">
        <div className="absolute -top-16 -left-16">
          <Sun />
        </div>
        <div className="relative bg-[rgba(255,255,255,0.75)] blur-[2px] size-full w-[400px] flex  rounded-[50px]  ">
          card
        </div>
      </div>
    </div>
  );
}
