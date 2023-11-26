import Category from "./Category";

function Categories() {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <ul>
        <li>
          <Category name="React" />
        </li>
        <li>
          <Category name="Javascript" />
        </li>
        <li>
          <Category name="News" />
        </li>
      </ul>
    </section>
  );
}

export default Categories;
