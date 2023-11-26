import Tag from "./Tag";

function Tags() {
  return (
    <section className="tags">
      <h2>Tags</h2>
      <ul>
        <li>
          <Tag name="React" />
        </li>
        <li>
          <Tag name="State Management" />
        </li>
        <li>
          <Tag name="React Hook" />
        </li>
      </ul>
    </section>
  );
}

export default Tags;
