import { Main } from "./styles";
import { Container} from "./styles";
import BtnWordsOrImages from "../../components/btnB";
import { RiHome2Fill} from 'react-icons/ri';

export function B() {
    return(
        <Container>
            <Main to="/">
                <RiHome2Fill/>
            </Main>

            <div>
                <h1>Estou desenvolvendo uma revisão do conteúdo para você! </h1>
            </div>
        </Container>
    )
}