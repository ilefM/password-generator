import React from "react";
import {GithubRepo, IconWrapper, Container} from "./styles";
import {ReactComponent as Icon} from "../../assets/githubIcon.svg";

const Footer = () => {
    return (
        <Container>
            <IconWrapper>
                <Icon />
            </IconWrapper>

            <GithubRepo>
                <a href="https://github.com/ilefM/password-generator">
                    Github repository
                </a>
            </GithubRepo>
        </Container>
    );
};

export default Footer;
