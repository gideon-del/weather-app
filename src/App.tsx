import Search from "./components/Search";
function App() {
  const dates = new Date().getFullYear();
  console.log(dates);
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
        <div className="flex items-center">
          <p className="md:text-6xl text-3xl">25°c</p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="sunny" />
        </div>
        <div className=" max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full px-5 gap-6">
          <div className="bg-primary font-bold flex items-center justify-between gap-2 p-4 rounded-md">
            <i className="fa-solid fa-wind text-2xl "></i>
            <p className="text-gray-600 ">
              Wind Speed <br /> <span className="text-3xl">12km/h</span>
            </p>
          </div>

          <div className="bg-primary font-bold flex items-center justify-between gap-2 p-4 rounded-md">
            <i className="fa-solid fa-wind text-2xl "></i>
            <p className="text-gray-600 ">
              Wind Speed <br /> <span className="text-3xl">12km/h</span>
            </p>
          </div>

          <div className="bg-primary font-bold flex items-center justify-between gap-2 p-4 rounded-md">
            <i className="fa-solid fa-wind text-2xl "></i>
            <p className="text-gray-600 ">
              Wind Speed <br /> <span className="text-3xl">12km/h</span>
            </p>
          </div>

          <div className="bg-primary font-bold flex items-center justify-between gap-2 p-4 rounded-md">
            <i className="fa-solid fa-wind text-2xl "></i>
            <p className="text-gray-600 ">
              Wind Speed <br /> <span className="text-3xl">12km/h</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
