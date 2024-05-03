import { EXAMPLES } from "../data";

function TabContent({ selectedTopic }) {
  return (
    <div id="tab-content">
      {!selectedTopic ? (
        <p>Please select a Topic?</p>
      ) : (
        <>
          {" "}
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </>
      )}
    </div>
  );
}

export default TabContent;
