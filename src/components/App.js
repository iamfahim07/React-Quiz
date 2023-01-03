import "../styles/App.css";
import MainLayout from "./MainLayout";
import Image from "./MainPage/Image";
import Quiz from "./MainPage/Quiz";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Image />
        <Quiz />
      </MainLayout>
    </div>
  );
}

export default App;
