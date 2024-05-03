import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((el) => (
          <CoreConcept {...el} key={el.title} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
