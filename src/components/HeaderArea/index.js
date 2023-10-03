import Logo from "../Logo/index.js";
import { H2Medium, H4Regular} from "../Typograpy/index.js";
import { HeaderAreaStyled } from "./styles.js";

export default function HeaderArea() {
    return (
        <HeaderAreaStyled>
            <Logo/>
            <H2Medium cor='#09090B' placeholder='Idealize, Crie, Transforme.'/>
            <H4Regular cor='#71717A' placeholder='Faça o seu login ou então crie uma nova conta agora mesmo!'/>
        </HeaderAreaStyled>
        
    )
}