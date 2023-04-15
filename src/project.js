
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
import web from "./unknown.png";
import ai from "./original.png";
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
          <Tab label="Personal AI Financial Chatbot" {...a11yProps(5)} style = {{color: "#222231"}}/>
          <Tab label="More to come..." {...a11yProps(6)} style = {{color: "#222231"}}/>
        </Tabs>
      </AppBar>
      <div style={{
        backgroundColor: "#E9DFDA"
      }}>
      <TabPanel value={value} index={0} >
      <div>
        <video src={csv} width="300" height="500" controls="controls" autoplay="true" muted = "true"/>
        </div>
        <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          A CSV to KML converter created during my internship at Leidos specifically for their uses
          before adapting it for more general use. It contains convex-hull algorithms to correctly
          display coordinates in a nice polygon shape. When given any CSV file or a folder of CSV files, 
          the program asks for value ranges for each layer before quickly converting them all into KML files
          that can be opened as a visual simulation in Google Earth. This can be useful for representing data in the real 
          world for clients or to allow for better understanding of situations. Learn more&nbsp;
        <a href = "https://github.com/chengJazhua/CsvToKml">
        here.
          
        </a>
        </div>
        
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic', height: "26.95vh"}}>
          
          Java&emsp; •&emsp; KML&emsp; •&emsp; Algorithms&emsp; •&emsp; Javascript&emsp; •&emsp; OOP
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
        <img src={ball} alt="ball ss" />
        </div>
        
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          This is a little game ball game I created that was named Bing Bong. It was made using 
          Java and Java GUI, and the core of the game is to just destroy all the blocks in the level
          by hitting them with the ball. Although fairly simple gameplay wise, the program contains a collision 
          detector, real world physics, a local leaderboard, scaling randomized levels, power-ups and debuffs.
          It also utilizes Java as an object oriented language. Learn more&nbsp;
          <a href = "https://github.com/chengJazhua/ballGame">
        here.
          
        </a>
          
        </div>
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic', height:'35vh'}}>
          
          Java&emsp; •&emsp; Java GUI&emsp; •&emsp; Git&emsp; •&emsp; Physics&emsp; •&emsp; OOP
        </div>
        
        
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div>
        <img src={pas} alt="pastimer" />
        </div>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          This is a desktop application called Pastimer. This was created based off the pomodoro studying technique,
          where one studies then takes a break in semi-short time spans. Pastimer is a timer where it allows users
          to select how long they want to study and take a break for, then continously repeats those
          timers. Not only that, but the program contains self-coded mini-games for users during the break as well,
          including minesweeper, frogger, and more. Learn more&nbsp;
          <a href = "https://github.com/thomasltran/pastimer">
        here.
        
        </a>
          
        </div>
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic', height: "30.95vh"}}>
          
          Java&emsp; •&emsp; LibGDX&emsp; •&emsp; Git&emsp; •&emsp; Docker&emsp; •&emsp; OOP
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div>
        <img src={child} alt="369 ss" />
        </div>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          A game from my childhood that I coded to play with my family to eliminate the hassle
          of drawing out the board on a piece of paper each game. The game is tic-tac-toe-esque,
          where players get points for each line of 3, 6, and 9 that they make.  
          This was made using only Java and Java GUI, using algorithms to check for points and 
          check for required lines when the option is selected. Learn more&nbsp;
          <a href = "https://github.com/chengJazhua/369-game">
        here.
        
        </a>
        </div>
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic', height: '35vh'}}>
          
          Java&emsp; •&emsp; Java GUI
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div>
      <img src={web} alt="website" />
        </div>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          You're on it now! This whole website was a personal project coded using react, javascript,
          and CSS, while using Docker and Git for the application development. I used this as a means to learn 
          and then apply my new knowledge of javascript and CSS. Feel free to look around the website some more
          or check out the code&nbsp;
          <a href = "https://github.com/chengJazhua/chengJazhua.github.io">
        here!
        
        </a>
        </div> 
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic', height: '39.02vh'}}>
          
          Javascript&emsp; •&emsp; CSS &emsp; •&emsp; Git&emsp; •&emsp; Docker&emsp; •&emsp; React
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div>
        <img src={ai} alt="ai" />
        </div>
      <div className = "text" style = {{color: "#222231", width: "60vw", fontSize: 20}}>
          Created with 3 friends for HooHacks 2023, this was a fullstack project finished in under 24 hours. It 
          includes a page with all of your bank account information, in addition with certain stats and 
          suggestions to improve your spending habits. There is also a separate page that allows to user to 
          type and chat with an AI about their specific spending, allowing them to ask financial questions
          and recieved personalized answers quickly. Learn more&nbsp;
          <a href = "https://github.com/tot/hoohacks-2023"> 
          here 
          </a>
          &nbsp;and&nbsp;
          <a href = "https://devpost.com/software/pennywise-an-ai-assisted-savings-assistant?ref_content=my-projects-tab&ref_feature=my_projects" >
            here!
          </a>
          
          
        </div>
        <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic', height: '35.1vh'}}>
          
          Javascript&emsp; •&emsp; MongoDB&emsp; •&emsp; CSS &emsp; •&emsp; Git&emsp; •&emsp; Python&emsp; •&emsp; React &emsp; •&emsp; Flask
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