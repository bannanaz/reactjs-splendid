import AdUpload from "../../components/AdUpload";
import Bottomnav from "../../components/Bottomnav";
import { GoBack, MainContainerCenter } from "../../components/DesignElements";

const Create = () => {
  return (
    <>
      <br></br>
      <GoBack />
      <br></br>
      <MainContainerCenter>
        <AdUpload />
      </MainContainerCenter>
      <Bottomnav />
    </>
  );
};

export default Create;
