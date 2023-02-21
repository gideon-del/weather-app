import { useEffect, useState } from "react";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import { loadLocation } from "./store/apiCalls";
import useStore from "./store/store";
function App() {
  const dates = new Date().getFullYear();
  const store = useStore();
  const [coords, setCoords] = useState<{ lat: number; long: number }>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        store.toggleIsLoading(true);
        await loadLocation(
          { lat: pos.coords.latitude, long: pos.coords.longitude },
          store.loadCurrentLocation
        );
        store.toggleIsLoading(false);
      },
      (err) => alert("Not able to get position")
    );
  }, []);
  if (!store.isLoading) {
    console.log(store.weather);
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-tr from-primary to-secondary font-josefinSans grid justify-items-center items-start py-7">
        <Search />
        {/* <div className="flex max-w-5xl mx-auto flex-col md:flex-row glassBg">
          <div className="grid grid-cols-2 place-items-center">
            <h2 className="text-xs md:text-5xl">296.32ĸ </h2>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              className="w-full drop-shadow-lg"
            />
          </div>
          <div>
            <h1> Weather Report for Nigeria</h1>
            <p>Scatterd Clouds</p>
            <p>Temperature: Feels Like 295.14ĸ</p>
            <p>Humidity: 17</p>
            <p>Sea level: 1012</p>
            <p>Pressure:1012.2Pa </p>
            <div>
              <h2 className="font-bold">Wind</h2>
              <p>Speed: 3.94km/s</p>
              <p>Degree: 37°</p>
            </div>
          </div>
        </div> */}
        {store.isLoading ? <span className="loader"></span> : <WeatherInfo />}
      </main>
    </>
  );
}

export default App;
