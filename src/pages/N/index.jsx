import { Container } from "./styles";
import { Main } from "./styles";
import BtnWordsOrImages from "../../components/btnN";
import { RiHome2Fill} from 'react-icons/ri';

export function N() {
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