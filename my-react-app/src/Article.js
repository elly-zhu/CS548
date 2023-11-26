import Category from "./Category";
import Tag from "./Tag";

function Article({ title, content, tags = [], categories = [] }) {
  return (
    <article className="article">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="article_additional">
        {tags.map((tag) => (
          <Tag name={tag} />
        ))}
      </div>
      <div className="article_additional">
        {categories.map((category) => (
          <Category name={category} />
        ))}
      </div>
    </article>
  );
}

export default Article;
