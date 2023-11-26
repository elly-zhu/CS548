import Tag from "./Tag";

function Tags() {
  return (
    <section className="tags">
      <h2>Tags</h2>
      <ul>
        <li>
          <Tag name="Tag 1" />
        </li>
        <li>
          <Tag name="Tag 2" />
        </li>
        <li>
          <Tag name="Tag 3" />
        </li>
      </ul>
    </section>
  );
}

export default Tags;
