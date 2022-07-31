const AddJournalEntry = ({ addEntry }) => {
  return (
    <div className="ui segment">
      <form onSubmit={addEntry} className="ui form">
        <div className="ui grid">
          <div className="row">
            <div className="thirteen wide column">
              <div className="field">
                <input type="text" name="title" placeholder="Title..." />
              </div>
            </div>
            <div className="three wide column">
              <div className="field">
                <div className="ui right floated icon buttons">
                  <button type="submit" className="ui green icon button">
                    <i className="save outline icon"></i>
                  </button>
                  <button className="ui grey icon button">
                    <i className="undo icon"></i>
                  </button>
                  <button className="ui red icon button">
                    <i className="trash alternate outline icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="field">
                <textarea name="entry" placeholder="Entry..."></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="fourteen wide column">
              <div className="fluid ui inline field">
                <label>Tags: </label>
                <input type="text" name="tags" placeholder="Tags" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJournalEntry;
