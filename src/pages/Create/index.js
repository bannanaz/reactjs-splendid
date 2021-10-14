import AdUpload from "../../components/AdUpload";
import Bottomnav from "../../components/Bottomnav";
import { useHistory } from "react-router-dom";

import { Link } from "@material-ui/core";
import { GoBackIcon } from "../../components/DesignElements";

const Create = () => {
  const history = useHistory();
  return (
    <>
      <br></br>
      <Link variant="button" onClick={() => history.goBack()}>
        <GoBackIcon />
      </Link>
      <br></br>
      <br></br>
      <AdUpload />
      <Bottomnav />
    </>
  );
};

export default Create;
