import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Box, Tab, Tabs } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";

import { getMovies } from "../../actions/movies";
import Movies from "../Movies/Movies";
import Form from "../Form/Form";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, [currentId, dispatch]);

  // const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Movies" {...a11yProps(0)} />
          <Tab label="Favourites" {...a11yProps(1)} />
          <Tab label="Form" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={12}>
              <Movies setCurrentId={setCurrentId} setValue={setValue} />
            </Grid>
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <Favourites /> */}Favourites
      </TabPanel>
      <TabPanel value={value} index={2}>
        {
          <Container className={classes.center}>
            <Grid
              container
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={12}>
                <Form
                  // handleClose={togglePopup}
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                  // setIsOpen={setIsOpen}
                  setValue={setValue}
                />
              </Grid>
            </Grid>
          </Container>
        }
      </TabPanel>
    </Box>
  );
};

export default Header;
