import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    border: "1px solid #999",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  // closeButton: {
  //   // marginLeft: "240px",
  //   // marginInlineEnd: "10px",
  //   // right: "15px",
  //   // content: "x",
  //   // cursor: "pointer",
  //   position: "absolute",
  //   // right: "calc(12% - 25px)",
  //   // top: "calc(105vh - 85vh - 33px)",
  //   background: "#region",
  //   // width: "30px",
  //   // height: "30px",
  //   borderRadius: "50%",
  //   // top: "-8px",
  //   // right: "-8px",
  //   // lineHeight: "20px",
  //   // textAlign: "center",
  //   border: "1px solid #999",
  //   fontSize: "20px",
  // },
}));
