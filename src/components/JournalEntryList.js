import JournalEntry from "./JournalEntry";

const JournalEntryList = ({ entries }) => {
  return (
    <>
      {entries.map((entry) => {
        return (
          <div key={entry.id} className="row">
            <div className="column">
              <JournalEntry entry={entry} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JournalEntryList;
