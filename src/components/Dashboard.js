const Dashboard = () => {
  return (
    <div id="home">
      <h1 className="ui center aligned header">Home</h1>
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui segment">
            <h4 className="ui center aligned header">ToDo Progress</h4>
          </div>
        </div>
        <div className="four wide column">
          <div className="ui segment">
            <h4 className="ui center aligned header">Sleep Progress</h4>
          </div>
        </div>
        <div className="four wide column">
          <div className="ui segment">
            <h4 className="ui center aligned header">Weight Progress</h4>
          </div>
        </div>
        <div className="four wide column">
          <div className="ui segment">
            <h4 className="ui center aligned header">Internet Progress</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
