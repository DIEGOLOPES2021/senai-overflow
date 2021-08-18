import { Container, IconSignOut } from "./styles";
import imgLogo from "../../assets/logoSenai.png"
import {FaSignOuAllt} from "react-icons/"

function Header() {
    return (
       <Container>
            <img src={imgLogo} />
            <input type="text" placeholder="Pesquisar" />
            <div>
                <IconSignOut />
            </div>
       </Container>
    );
}
export default Header;