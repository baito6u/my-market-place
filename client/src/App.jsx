import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Navigation />

      <main className="box">
        <HomePage/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
