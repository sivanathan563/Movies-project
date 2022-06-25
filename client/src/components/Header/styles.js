import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    color: "rgba(0,183,255, 1)",
    right: "20px",
  },
  image: {
    marginLeft: "15px",
  },
  circle: {
    // width: "20px",
    // height: "50px",
    borderRadius: "10%",
    // marginLeft: "200px",
    // content: "+",
    // padding: "0px",
    cursor: "pointer",
    position: "fixed",
    right: "calc(12% - 25px)",
    top: "calc(107vh - 85vh - 33px)",
    // background: "#region ",
    lineHeight: "20px",
    textAlign: "center",
    // border: "1px solid #999",
    // fontSize: "20px",
  },
  center: {
    position: "absolute",
  },
}));
