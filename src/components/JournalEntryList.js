import JournalEntry from "./JournalEntry";

const JournalEntryList = (props) => {
  const { entries } = props;
  const display = entries.map((entry) => {
    return (
      <div key={entry.id} className="row">
        <div className="column">
          <JournalEntry entry={entry} />
        </div>
      </div>
    );
  });

  return <>{display}</>;
};

export default JournalEntryList;
