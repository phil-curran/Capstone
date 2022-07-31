import React from "react";
import { getDocs, addDoc } from "firebase/firestore";
import { journalDataRef } from "../firebase";
import JournalEntryList from "./JournalEntryList";
import AddJournalEntry from "./AddJournalEntry";

class JournalDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journalEntries: [],
      currentView: null,
    };
    this.getEntries = this.getEntries.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.handleAddNewEntryClick = this.handleAddNewEntryClick.bind(this);
  }

  getEntries = () => {
    getDocs(journalDataRef)
      .then((snapshot) => {
        let retrievedEntries = [];
        snapshot.docs.forEach((doc) => {
          retrievedEntries.push({ ...doc.data(), id: doc.id });
        });
        this.setState((prevState) => ({
          journalEntries: retrievedEntries,
        }));

        console.log(this.state.journalEntries);
        this.setState({
          currentView: <JournalEntryList entries={this.state.journalEntries} />,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  addEntry = (e) => {
    e.preventDefault();
    try {
      const title = e.target.title.value;
      const entry = e.target.entry.value;
      let temp = e.target.tags.value;
      let tags = Array.from(temp.split(", "));
      let timeStamp = new Date();
      const entryObj = { title, entry, tags, timeStamp };
      addDoc(journalDataRef, entryObj);
    } catch (error) {
      console.log(error.message);
    }
    e.target.title.value = "";
    e.target.entry.value = "";
    e.target.tags.value = "";
    this.getEntries();
  };

  handleAddNewEntryClick = () => {
    this.setState({
      currentView: this.addEntryForm,
    });
  };

  componentDidMount = () => {
    this.getEntries();
  };

  journalEntryList = (<JournalEntryList entries={this.journalEntries} />);
  addEntryForm = (<AddJournalEntry addEntry={this.addEntry} />);

  render() {
    return (
      <>
        <h1 className="ui center aligned header">Journal</h1>
        <div className="ui form">
          <div className="ui grid">
            <div className="row">
              <div className="fourteen wide column">
                <div className="fluid field">
                  <input type="text" name="search" placeholder="Search" />
                </div>
              </div>
              <div className="two wide column">
                <button className="fluid ui green button">Search</button>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <button
                  onClick={this.handleAddNewEntryClick}
                  className="fluid ui blue button"
                >
                  Add Entry
                </button>
              </div>
            </div>
            {this.state.currentView}
          </div>
        </div>
      </>
    );
  }
}

export default JournalDash;
