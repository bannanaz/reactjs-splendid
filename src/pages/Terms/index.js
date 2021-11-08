import { Typography } from "@material-ui/core";
import React from "react";
import {
  GoBack,
  MainContainerCenter,
  PaperAdUpload,
} from "../../components/DesignElements";

const Terms = () => {
  return (
    <>
      <br></br>
      <GoBack />
      <br></br>
      <MainContainerCenter>
        <PaperAdUpload>
          <Typography variant="h2">Hyresvillkor</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <br></br>
          <Typography variant="body1">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
          <br></br>
          <Typography variant="body1">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
          <br></br>
        </PaperAdUpload>
        <br></br>
        <br></br>
        <br></br>
      </MainContainerCenter>
    </>
  );
};
export default Terms;
