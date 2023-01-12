import {FC, ReactNode} from "react";
import {Container} from "@mui/material";
import './MainContainer.scss';

type Props = {
  children: ReactNode,
};

export const MainContainer: FC<Props> = ({children}) => (
  <Container maxWidth={false} className="container">
    {children}
  </Container>
);