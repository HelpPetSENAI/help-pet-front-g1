import PageG1Style from './PageG1Style';
import {StyledAuthButton} from "../../components/g1-components/buttons/auth-btn/AuthButtonStyle.js";
import {StyledBlackBox} from "../../components/g1-components/placeholders/black-box/BlackBoxStyle.js";
import {StyledWhiteInput} from "../../components/g1-components/inputs/white-input/WhiteInputStyle.js";

export default function PageG1() {
    return (
        <PageG1Style>
        <header>
            <img src="" alt=""/>
            <h1>
                Deseja doar um pet? Faça seu cadastro!
            </h1>
            <StyledAuthButton>
                OIÊ
            </StyledAuthButton>
            <StyledBlackBox>
                SALVE
            </StyledBlackBox>
            <StyledWhiteInput>
                salvi
            </StyledWhiteInput>
        </header>
        </PageG1Style>
    )
}