import Category from "./Category";

function Categories() {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <ul>
        <li>
          <Category name="Category 1" />
        </li>
        <li>
          <Category name="Category 2" />
        </li>
        <li>
          <Category name="Category 3" />
        </li>
      </ul>
    </section>
  );
}

export default Categories;
