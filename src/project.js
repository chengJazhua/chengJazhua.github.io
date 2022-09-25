
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'; 
  /*
const Project = () => {
  return (
    <h1>Projects! https://github.com/chengJazhua</h1>
  );
}; */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    
    'aria-controls': `simple-tabpanel-${index}`,
    color: "#222231"
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    backgroundColor: "red",
    
  },
}));

export default function TabPan() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
     
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="tabs" style = {{backgroundColor: "#EFF0F1"}}>
          
          <Tab label="Item One" {...a11yProps(0)} style = {{color: "#222231"}}/>
          <Tab label="Item Two" {...a11yProps(1)} style = {{color: "#222231"}}/>
          <Tab label="Item Three" {...a11yProps(2)} style = {{color: "#222231"}}/>
          <Tab label="Item Four" {...a11yProps(3)} style = {{color: "#222231"}}/>
          <Tab label="Item Five" {...a11yProps(4)} style = {{color: "#222231"}}/>
          <Tab label="Item Six" {...a11yProps(5)} style = {{color: "#222231"}}/>
          <Tab label="More to come..." {...a11yProps(6)} style = {{color: "#222231"}}/>
        </Tabs>
      </AppBar>
      <div style={{
        backgroundColor: "#B4ACB7"
      }}>
      <TabPanel value={value} index={0} >
        <div style = {{color: "#222231"}}>
          Item One
        </div>
        

        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style = {{color: "#222231"}}>
          Item One
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style = {{color: "#222231"}}>
          Item One
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div style = {{color: "#222231"}}>
          Item One
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div style = {{color: "#222231"}}>
          Item One
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div style = {{color: "#222231"}}>
          Item One
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div style = {{color: "#222231"}}>
          Item One
        </div>
      </TabPanel>
    </div>
    </div>
    
  );
}
  
//export default Project;