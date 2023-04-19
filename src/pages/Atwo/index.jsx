import { Container } from "./styles";
import { Main } from "./styles";
import BtnWordsOrImages from "../../components/btnA2";
import { RiHome2Fill} from 'react-icons/ri';

export function Atwo() {
    return(
        <Container>
            <Main to="/">
                <RiHome2Fill/>
            </Main>
            
            <div>
                <BtnWordsOrImages />
            </div>
        </Container>
    )
}