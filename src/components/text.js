import React, { useState } from "react";
import { getDocs, addDoc } from "firebase/firestore";
import { journalDataRef } from "../firebase";
import JournalEntry from "./JournalEntry";

const JournalDash = () => {
  const [journalEntries, setJournalEntries] = useState([]);

  const getEntries = () => {
    getDocs(journalDataRef)
      .then((snapshot) => {
        let journalEntries = [];
        snapshot.docs.forEach((doc) => {
          journalEntries.push({ ...doc.data(), id: doc.id });
        });
        console.log(journalEntries);
        this.setState({ journalEntries: journalEntries });
        // console.log(this.state.journalEntry);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addEntry = (e) => {
    e.preventDefault();
    try {
      const title = e.target.title.value;
      const text = e.target.text.value;
      let tagList = Array.from(e.target.tagList.value.split(", "));
      const entry = { title, text, tagList };
      addDoc(journalDataRef, entry);
    } catch (error) {
      console.log(error.message);
    }
    getEntries();
  };

  this.componentDidMount = () => {
    getEntries();
  };

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
        {this.state.journalEntries.map((entry) => (
          <JournalEntry key={entry.id} entry={entry} />
        ))}

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
                      <button
                        type="submit"
                        onClick={() => addEntry}
                        className="ui green icon button"
                      >
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
                    <textarea name="text" placeholder=""></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="fourteen wide column">
                  <div className="ui inline field">
                    <label>Tags: </label>
                    <input type="text" name="tags" placeholder="tagList" />
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
