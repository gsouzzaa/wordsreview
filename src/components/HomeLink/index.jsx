import { Link } from "react-router-dom";
import { Container } from "./styles";
import {RiHome2Fill} from 'react-icons/ri';
import { HomeLink } from "./styles";


export default function BtnMain() {
    return(
        <Container >
            <HomeLink>
                <Link to="/" className="HomeLink-link">
                    <RiHome2Fill />
                </Link>
            </HomeLink>
        </Container>
        )
}