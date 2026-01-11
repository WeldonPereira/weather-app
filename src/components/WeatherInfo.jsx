import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

const InfoItem = ({ icon, value, label }) => (
  <div className="col">
    <img src={icon} alt={label} />
    <div>
      <p>{value}</p>
      <span>{label}</span>
    </div>
  </div>
);

const WeatherInfo = ({ humidity, windSpeed }) => {
  return (
    <div className="weather-data">
      <InfoItem icon={humidity_icon} value={`${humidity}%`} label="Humidity" />
      <InfoItem
        icon={wind_icon}
        value={`${windSpeed} Km/h`}
        label="Wind Speed"
      />
    </div>
  );
};

export default WeatherInfo;
