import { Container } from "./styles";
import BtnWordsOrImages from "../../components/btnA";
import BtnMain from "../../components/HomeLink";

export function A() {
    return(
        <Container>
            <BtnMain />
            <div>
                <BtnWordsOrImages />
            </div>
        </Container>
    )
}