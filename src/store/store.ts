// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import { create } from "zustand";

let url: string;

type Weather = {
  weather: [
    {
      id: string;
      icon: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
  dt: number;
};
export type Coords = {
  lat: number;
  long: number;
};

//Store implementation
interface Store {
  weather: Weather | {};
  loadCurrentLocation: (weather: Weather) => void;
  loadSearch?: (search: string) => void;
  isLoading: boolean;
  toggleIsLoading: (loading: boolean) => void;
}
const useStore = create<Store>((set) => ({
  weather: {},
  loadCurrentLocation: async (weather: Weather) =>
    set((state) => ({ ...state, weather })),
  isLoading: true,
  toggleIsLoading: (loading) =>
    set((state) => ({
      ...state,
      isLoading: loading,
    })),
}));
export default useStore;
export type { Weather };
