import Text from "./components/text/Text";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";
import Connexion from "./pages/Connexion";

export default function App() {
  return (
    <>
      <Header />
      <Landing nombreOffres={500} />
      <Text
        title="Project set-up"
        text="This is the set-up of the project Go Trabakho"
      />
      <Connexion />
    </>
  );
}
