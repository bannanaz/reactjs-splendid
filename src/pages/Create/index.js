import AdUpload from "../../components/AdUpload";
import Bottomnav from "../../components/Bottomnav";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../styles/theme";
import { Container } from "@material-ui/core";

const Create = () => {
  return (
    <div>
      <Container>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <br></br>
          <AdUpload />
          <Bottomnav />
        </MuiThemeProvider>
      </Container>
    </div>
  );
};

export default Create;
