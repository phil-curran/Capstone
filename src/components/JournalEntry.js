const JournalEntry = ({ entry }, index) => {
  return (
    <div key={index} className="ui segment">
      <div className="ui grid">
        <div className="row">
          <div className="fifteen wide column">
            <h2 className="ui header">{entry.title}</h2>
          </div>
          <div className="one wide column">
            <button className="ui yellow icon button">
              <i className="edit outline icon"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p>{entry.entry}</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p>
              Tags: &nbsp;&nbsp;
              {entry.tags.map((tag, index) => {
                return (
                  <a key={index} className="ui red label">
                    {tag}
                  </a>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
