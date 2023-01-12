import './BackButton.scss';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button} from "@mui/material";
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {customize} from "./customize";

type Props = {
  title: string;
};

export const BackButton: FC<Props> = ({title}) => {
  const navigate = useNavigate();
  
  const moveBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="back-button">
      <ArrowBackIcon fontSize="small" sx={customize.arrowBackIcon}/>
      <Button
        size="small"
        onClick={moveBack}
        sx={customize.backButton}
      >
        {title}
      </Button>
    </div>
  );
};