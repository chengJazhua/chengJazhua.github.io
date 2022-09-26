
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'; 
import ball from "./ballPic.png";
import child from "./369Pic.png";
import csv from "./CSV.mov";
import pas from "./pastimer.PNG";
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
          
        <Tab label="CSV Converter" {...a11yProps(0)} style = {{color: "#222231"}}/>
          <Tab label="Bing Bong" {...a11yProps(1)} style = {{color: "#222231"}}/>
          <Tab label="Pastimer" {...a11yProps(2)} style = {{color: "#222231"}}/>
          <Tab label="369 Game" {...a11yProps(3)} style = {{color: "#222231"}}/>
          <Tab label="Personal Site" {...a11yProps(4)} style = {{color: "#222231"}}/>
          <Tab label="Server and Frontend" {...a11yProps(5)} style = {{color: "#222231"}}/>
          <Tab label="More to come..." {...a11yProps(6)} style = {{color: "#222231"}}/>
        </Tabs>
      </AppBar>
      <div style={{
        backgroundColor: "#B4ACB7"
      }}>
      <TabPanel value={value} index={0} >
      <div>
        <video src={csv} width="300" height="500" controls="controls" autoplay="true" muted = "true"/>
        </div>
        <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          CSV
        </div>
        
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic'}}>
          
          Java&emsp; •&emsp; KML&emsp; •&emsp; Algorithms&emsp; •&emsp; Javascript&emsp; •&emsp; OOP
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
        <img src={ball} alt="ball ss" />
        </div>
        
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          Balls
          
        </div>
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic'}}>
          
          Java&emsp; •&emsp; Java GUI&emsp; •&emsp; Git&emsp; •&emsp; Physics&emsp; •&emsp; OOP
        </div>
        
        
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div>
        <img src={pas} alt="pastimer" />
        </div>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          Pastimer
          
        </div>
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic'}}>
          
          Java&emsp; •&emsp; LibGDX&emsp; •&emsp; Git&emsp; •&emsp; Docker&emsp; •&emsp; OOP
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div>
        <img src={child} alt="369 ss" />
        </div>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          369
        </div>
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic'}}>
          
          Java
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          Website
        </div> 
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic'}}>
          
          Javascript&emsp; •&emsp; HTML&emsp; •&emsp; CSS &emsp; •&emsp; Git&emsp; •&emsp; Docker&emsp; •&emsp; React
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          In Progress!
        </div>
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic'}}>
          
          Javascript&emsp; •&emsp; Python&emsp; •&emsp; CSS &emsp; •&emsp; Git&emsp; •&emsp; Docker&emsp; •&emsp; React
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          Much more to come!
        </div>
      </TabPanel>
    </div>
    </div>
    
  );
}
  
//export default Project;