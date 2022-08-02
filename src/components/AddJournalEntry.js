const AddJournalEntry = ({ addEntry }) => {
  return (
    <div className="ui segment">
      <form onSubmit={addEntry} className="ui form">
        <div className="ui grid">
          <div className="row">
            <div className="fifteen wide column">
              <div className="field">
                <input type="text" name="title" placeholder="Title..." />
              </div>
            </div>
            <div className="one wide column">
              <div className="field">
                <button type="submit" className="ui green icon button">
                  <i className="save outline icon"></i>
                </button>
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
            <div className="column">
              <div className="fluid field">
                <input type="text" name="tags" placeholder="Tags..." />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJournalEntry;
