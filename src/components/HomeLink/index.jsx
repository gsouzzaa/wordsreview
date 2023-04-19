import { Container } from "./styles";
import { RiHome2Fill} from 'react-icons/ri';


export function BtnMain() {
    return(
        <Container>
            <RiHome2Fill to="/">
                Home
            </RiHome2Fill>
        </Container>
        )
}