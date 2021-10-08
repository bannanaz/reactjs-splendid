import AdUpload from "../../components/AdUpload";
import Bottomnav from "../../components/Bottomnav";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../styles/theme";

const Create = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <br></br>
        <AdUpload />
        <Bottomnav />
      </MuiThemeProvider>
    </div>
  );
};

export default Create;
