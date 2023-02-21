import { Weather } from "./store";
import { toast } from "react-toastify";
const API_KEY: string = import.meta.env.VITE_API_KEY;
type Coords = {
  lat: number;
  long: number;
};

export const loadLocation = async (
  coords: Coords,
  callback: (weather: Weather) => void
) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${API_KEY}&units='metric'`
  );
  const data = await res.json();

  callback(data as Weather);
};
export const loadSearch = async (
  location: string,
  cb: (waether: Weather) => void
) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    const data = await res.json();
    if (data.cod !== 200) {
      throw new Error(data.message);
    }
    cb(data as Weather);
  } catch (error: any) {
    if (error.message) {
      toast.warn(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
};
