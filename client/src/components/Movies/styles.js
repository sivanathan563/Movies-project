import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  add: {
    position: "absolute",
    left: "calc(85% - 25px)",
    top: "calc(106vh - 85vh - 33px)",
  },
}));
