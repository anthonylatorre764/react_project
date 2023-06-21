import "../styles/base.css"

const TrafficLight = () => {
  // JavaScript XML
  const light = 'go';
  if (light === 'go') {
    return (
      <>
        <div className="green_light">
            <p>Go</p>
        </div>
      </>
    );
  }
  else if (light === 'yield') {
    return (
      <>
        <div className="yellow_light">
            <p>Yield</p>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="red_light">
          <p>Stop</p>
      </div>
    </>
  )
};

export default TrafficLight;
