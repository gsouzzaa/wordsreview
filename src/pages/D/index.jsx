import { Container} from "./styles";
import { Main } from "./styles";
import BtnWordsOrImages from "../../components/btnD";
import { RiHome2Fill} from 'react-icons/ri';

export function D() {
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