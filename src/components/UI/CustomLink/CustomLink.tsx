import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";
import './CustomLink.scss';

type Props = {
  link: string;
  children: ReactNode;
};

export const CustomLink: FC<Props> = ({link, children}) => {
  return (
    <Link to={link} className="custom-link">
      {children}
    </Link>
  );
};