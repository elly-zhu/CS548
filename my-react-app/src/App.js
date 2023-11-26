import Header from "./Header";
import Tags from "./Tags";
import Articles from "./Articles";
import Categories from "./Categories";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Articles />
      </div>
      <aside className="sidebar">
        <Categories />
        <Tags />
      </aside>

      <footer className="footer">
        <p>&copy; 2023 React Styling Assignment</p>
      </footer>
    </div>
  );
}

export default App;
