import "./App.css";
import {
  Channel,
  Header,
  HighLight,
  Live,
  SectionOne,
  Spicial,
  SpcialForNamava,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SectionOne />
      <HighLight />
      <Spicial />
      <Channel />
      <Live />
      <SpcialForNamava />
      <Footer />
    </div>
  );
};

export default App;
