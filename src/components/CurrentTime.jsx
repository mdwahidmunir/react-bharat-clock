const CurrentTime = () => {
  const currentDate = new Date();
  return (
    <p className="lead">
      The current time is : {currentDate.toLocaleDateString()} --{" "}
      {currentDate.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
