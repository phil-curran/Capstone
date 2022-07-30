const Dashboard = () => {
  const fiveColumns = {
    width: "20%",
  };
  return (
    <div id="home">
      <h1 className="ui center aligned header">Dashboard</h1>
      <div className="ui grid">
        <div className="column" style={fiveColumns}>
          <div className="ui segment center aligned header">TEST CONTENT</div>
        </div>
        <div className="column" style={fiveColumns}>
          <div className="ui segment center aligned header">TEST CONTENT</div>
        </div>
        <div className="column" style={fiveColumns}>
          <div className="ui segment center aligned header">TEST CONTENT</div>
        </div>
        <div className="column" style={fiveColumns}>
          <div className="ui segment center aligned header">TEST CONTENT</div>
        </div>
        <div className="column" style={fiveColumns}>
          <div className="ui segment center aligned header">TEST CONTENT</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
