import "./App.css";
import {
  Channel,
  Header,
  HighLight,
  Live,
  SectionOne,
  Special,
  SpecialForNamava,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SectionOne />
      <HighLight />
      <Special />
      <Channel />
      <Live />
      <SpecialForNamava />
      <Footer />
    </div>
  );
};

export default App;
