export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
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
}, []);
const searchHandler = (e) => {
  const search = e.target.value;
  const filtered = cities.filter((city) => {
    return city.includes(search);
  });
  setSearched(filtered);
};
