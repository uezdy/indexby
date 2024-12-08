'use client'
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import React from "react";
import {css, styled} from "@mui/system";

const HelloPage = () => {
    return <HelloPageWrapper>
        <div className="login-cmp">
            <Button className="login-google-button" variant="plain">Вход через Google</Button>
            <div className="book-title">Метрическаѧ кни́га</div>
            <div className="book-description">​длѧ​ записи ​родившихсѧ​, ​бракомъ​ сочета́вшихсѧ ​и҆​ ᲂу҆ме́ршихъ</div>
        </div>
        <div className="login-cmp">
            <Link className="link-to" href={`/metrics/map`}>Карта результатов</Link>
            <Link className="link-to" href="https://telegra.ph/MK-11-18-5">Список результатов</Link>
        </div>
    </HelloPageWrapper>
};

const HelloPageWrapper = styled('div')(
    ({theme}) => css`
      & .login-cmp {
        display: flex;
        flex-direction: column;
        align-items: center;

        .login-google-button {
          margin: 30px 20px;
        }
        .book-title,
        .book-description {
          font-family: 'Monomakh Unicode';
          margin: auto;
        }
        .book-title {
          font-size: 27pt;
        }
        .book-description {
          margin: 20vh 4vw;
        }
        .link-to {
          margin: 10px 0;
        }
      }

    `,
);

export default HelloPage;