import { Container} from "./styles";
import { Main } from "./styles";
import BtnWordsOrImages from "../../components/btnC";
import { RiHome2Fill} from 'react-icons/ri';

export function C() {
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