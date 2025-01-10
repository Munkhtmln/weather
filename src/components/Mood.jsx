export default function Mood({ mood }) {
  return (
    <div>
      {mood === "Sunny,Clear" && <img src="/sun.png" alt="" />}
      {mood === "Cloudy" && <img src="/Clouds.png" alt="" />}
      {mood === "Overcast" && <img src="/Rain.png" alt="" />}
      {mood === "Partly cloudy" && <img src="/Clouds.png" alt="" />}
      {mood === "Mist" && <img src="/Clouds.png" alt="" />}
      {mood === "Snowy" && <img src="/Snow.png" alt="" />}
      {mood === "Windy" && <img src="/Windy.png" alt="" />}
    </div>
  );
}
