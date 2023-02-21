import { useEffect, useState } from "react";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import { loadLocation } from "./store/apiCalls";
import useStore from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <main className="min-h-screen bg-gradient-to-tr from-primary to-secondary font-josefinSans grid justify-items-center items-start py-7 gap-3">
        <Search />
        {store.isLoading ? <span className="loader"></span> : <WeatherInfo />}
      </main>
    </>
  );
}

export default App;
