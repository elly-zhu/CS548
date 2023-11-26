import Article from "./Article";

function Articles() {
  return (
    <section className="articies">
      <Article
        title={"Article 1"}
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        tags={["Tag 1", "Tag2"]}
      />
      <Article
        title={"Article 2"}
        content={
          "This is the content of the second article. Add your own text here."
        }
        tags={["Tag3"]}
      />
      <Article
        title={"Article 3"}
        content={
          "This is the content of the third article. Add your own text here."
        }
        tags={["Tag3"]}
      />
    </section>
  );
}

export default Articles;
