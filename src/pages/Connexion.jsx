import Form from "../components/form/Form";
import { Input, Inputs } from "../components/input/Input";
import Button from "../components/button/Button";

export default function Connexion() {
  return (
    <Form title={"Connectez-vous"} text={"Pour continuer vers Go Trabakho"}>
      <Inputs>
        <Input type="email" label={"Email"} />
        <Input type="password" label={"Password"} />
      </Inputs>
      <Button value="Connecter" style={10} />
      <div className="center">
        <p>
          Vous n'avez pas un compte?{" "}
          <span>
            <a href="#">Créer un compte</a>
          </span>
        </p>
      </div>
    </Form>
  );
}
