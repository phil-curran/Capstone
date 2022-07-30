const JournalDash = () => {
  return (
    <>
      <h1 className="ui center aligned header">Journal</h1>
      <div className="ui form">
        <div className="ui grid">
          <div className="fourteen wide column">
            <div className="fluid field">
              <input type="text" name="search" placeholder="Search" />
            </div>
          </div>
          <div className="two wide column">
            <button className="fluid ui green button">Search</button>
          </div>
        </div>
        <div className="ui segment">
          <div className="ui grid">
            <div className="row">
              <div className="fifteen wide column">
                <h2 className="ui header">Title</h2>
              </div>
              <div className="one wide column">
                <button className="ui yellow icon button">
                  <i className="edit outline icon"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <p>
                  Spicy jalapeno bacon ipsum dolor amet ea velit deserunt enim
                  elit, eiusmod lorem non est spare ribs short loin short ribs
                  ut sirloin. Id velit nostrud aliquip salami non sint ullamco.
                  Ham hock aliqua ham corned beef capicola et short ribs pork
                  belly culpa laborum bresaola.
                </p>
                <p>
                  In ullamco buffalo jowl culpa pork belly. Anim ut dolore
                  turkey in. Ham hock in minim tail. Pork chop doner magna, esse
                  salami brisket lorem pancetta.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <p>
                  Tags: <a className="ui red tag label">Red</a>
                  <a className="ui orange tag label">Orange</a>
                  <a className="ui yellow tag label">Yellow</a>
                  <a className="ui olive tag label">Olive</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ui segment">
          <form className="ui form">
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
                      <button className="ui green icon button">
                        <i class="save outline icon"></i>
                      </button>
                      <button className="ui grey icon button">
                        <i class="undo icon"></i>
                      </button>
                      <button className="ui red icon button">
                        <i class="trash alternate outline icon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <div className="field">
                    <textarea name="description" placeholder=""></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="fourteen wide column">
                  <div className="ui inline field">
                    <label>Tags: </label>
                    <input type="text" placeholder="tagList" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JournalDash;
