const InternetDash = () => {
  return (
    <>
      <h1 className="ui center aligned header">Internet Usage</h1>
      <p>
        This will eventually hold an interface similar to SleepTracker where I
        monitor time spent on various devices & screens.
      </p>
      <p>
        I have local servers running{" "}
        <a href="https://activitywatch.net/" target="_blank">
          ActivityWatch
        </a>
        , which monitors traffic on local devices. This info can be accessed via
        API, and will be monitored like how other datapoints in this project
        will be.
      </p>
    </>
  );
};

export default InternetDash;
