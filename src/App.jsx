import Text from "./components/text/Text";
import Landing from "./components/landing/Landing";

export default function App() {
  return (
    <>
      <Landing nombreOffres={500} />
      <Text
        title="Project set-up"
        text="This is the set-up of the project Go Trabakho"
      />
    </>
  );
}
