import Article from "./Article";

function Articles() {
  return (
    <section className="articies">
      <Article
        title={"React Basics"}
        content={
          "React.js, developed by Facebook, is a powerful JavaScript library for building user interfaces. Its declarative syntax allows developers to create interactive UIs more efficiently. React organizes UI components into a tree structure, with a virtual DOM ensuring optimal performance by updating only the necessary parts. This promotes code reusability and maintainability."
        }
        tags={["React"]}
      />
      <Article
        title={"React State Management"}
        content={
          "One of React's key features is its efficient state management. React components can hold and manage their own state, facilitating dynamic updates without a page reload. The useState hook simplifies state handling, allowing developers to incorporate stateful behavior effortlessly"
        }
        tags={["React", "State Management"]}
      />
      <Article
        title={"React Hooks and Lifecycle"}
        content={
          "React Hooks revolutionized the way developers manage state and side effects. Introduced in React 16.8, hooks like useEffect and useReducer streamline component lifecycles and state transitions, reducing boilerplate code. Hooks allow functional components to utilize lifecycle methods, making them as powerful as class components. This paradigm shift simplifies component logic, promotes code readability, and encourages modularization. Developers can now harness the full power of React without the complexities of class-based components."
        }
        tags={["React", "React Hook"]}
      />
    </section>
  );
}

export default Articles;
