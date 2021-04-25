import "./SeasonDisplay.css";

const seasonConfig = {
  summer: { text: "Let's Heat the beach", iconName: "sun" },
  winter: { text: "Brr It is Cold", iconName: "snowflake" },
};

const getSeason = (lat, currentMonth) => {
  if (currentMonth > 2 && currentMonth < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
