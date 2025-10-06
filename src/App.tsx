import "./App.css";
import TagList from "./components/TagList";

function App() {
  return (
    <div className="bg-primary w-screen h-screen">
      <TagList tagList={["Tag 1", "Tag 2", "Tag 3"]} onTagClick={console.log} />
    </div>
  );
}

export default App;
