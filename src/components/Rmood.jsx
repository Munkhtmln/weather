export default function Rmood({ Rmod }) {
  return (
    <div>
      {Rmod === "Sunny" && <img src="/Moon.png" alt="" />}
      {Rmod === "Cloudy" && <img src="/Nclouds.png" alt="" />}
      {Rmod === "Overcast" && <img src="/Nrain.png" alt="" />}
      {Rmod === "Partly cloudy" && <img src="/Nclouds.png" alt="" />}
      {Rmod === "Mist" && <img src="/Nclouds.png" alt="" />}
      {Rmod === "Snowy" && <img src="/Nsnow.png" alt="" />}
      {Rmod === "Windy" && <img src="/Nwindy.png" alt="" />}
    </div>
  );
}
