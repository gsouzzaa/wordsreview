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
                <BtnWordsOrImages />
            </div>
        </Container>
    )
}