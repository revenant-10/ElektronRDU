import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Main from "./Isotagy/Main";
import GirishHatlar from "./Girishatlar/GirishHatlar";
import ChykyshHatlar from "./Cykyshatlar/ChykyshHatlar";
import IchkiResminamalar from "./Ickiresmi/IchkiResminamalar";
import Wezipeler from "./Wezipeler/Wezipeler";
import Fayylar from "./Fayllar/Fayllar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Drawer, AppBar, Toolbar, List, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import FolderIcon from "@material-ui/icons/Folder";
import './AppBar.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            TDSG ERDU
          </Typography>
          <Route path='/is otagy' render={()=>
            <Typography variant="h6" noWrap className='flexibleLabel'>IŞ OTAGY</Typography>}/>
          <Route path='/GirishHatlar' render={()=>
            <Typography variant="h6" noWrap className='flexibleLabel'>GIRIŞ HATLAR</Typography>}/>
          <Route path='/ChykyshHatlar' render={()=>
            <Typography variant="h6" noWrap className='flexibleLabel'>ÇYKYŞ HATLAR</Typography>}/>
          <Route path='/IchkiResminamalar' render={()=>
            <Typography variant="h6" noWrap className='flexibleLabel'>IÇKI RESMINAMALAR</Typography>}/>
          <Route path='/Wezipeler' render={()=>
            <Typography variant="h6" noWrap className='flexibleLabel'>WEZIPELER</Typography>}/>
          <Route path='/Fayylar' render={()=>
            <Typography variant="h6" noWrap className='flexibleLabel'>FAÝLLAR</Typography>}/>
        </Toolbar>
      </AppBar>
      
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List component="nav" aria-label="main mailbox folders">
              <Button
                style={{
                  minWidth: 200,
                  backgroundColor: "#e0e0e0",
                  paddingTop: 10,
                  boxShadow:
                    "3px 3px 5px 0 rgba(0, 0, 0, 0.30), 3px 3px 5px 0 rgba(0, 0, 0, 0.30)",
                }}
                startIcon={<AddIcon />}
                variant="contained"
              >
                Täze Döretmek
              </Button>
              <Link to='/is otagy'>
                <ListItemLink>
                  <ListItemIcon>
                    <PersonIcon/>
                  </ListItemIcon>
                  <ListItemText>
                    Is otagy
                  </ListItemText>                
                </ListItemLink>
              </Link>
              <Link to='/GirishHatlar'>
                <ListItemLink>
                  <ListItemIcon>
                    <ArrowForwardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Giriş hatlar" />
                </ListItemLink>
              </Link>
              <Link to='/ChykyshHatlar'>
                <ListItemLink>
                  <ListItemIcon>
                    <ArrowBackIcon />
                  </ListItemIcon>
                  <ListItemText primary="Çykyş hatlar" />
                </ListItemLink>
              </Link>
              <Link to='/IchkiResminamalar'>
                <ListItemLink>
                  <ListItemIcon>
                    <LibraryBooksIcon />
                  </ListItemIcon>
                  <ListItemText primary="Içki resminamalar" />
                </ListItemLink>
              </Link>
              <Link to='/Wezipeler'>
                <ListItemLink>
                  <ListItemIcon>
                    <PlaylistAddCheckIcon />
                  </ListItemIcon>
                <ListItemText primary="Wezipeler" />
                </ListItemLink>
              </Link>
              <Link to='/Fayylar'>
                <ListItemLink>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Faýllar" />
                </ListItemLink>
              </Link>
            </List>
            <Divider/>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItemLink href="#simple-list">
                <ListItemText primary="Sazmalar" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="Ulanyjylar" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="Ulanyjy hereketleri" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="Meniň hasabym" />
              </ListItemLink>
            </List>
          </div>
        </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/is otagy'/>
          </Route>
          <Route exact path='/is otagy' render={(props)=><Main {...props}/>}/>
          <Route exact path='/GirishHatlar' render={(props)=><GirishHatlar {...props}/>}/>
          <Route exact path='/ChykyshHatlar' render={(props)=><ChykyshHatlar {...props} />}/>
          <Route exact path='/IchkiResminamalar' render={(props)=><IchkiResminamalar {...props}/>}/>
          <Route exact path='/Wezipeler' render={(props)=><Wezipeler {...props}/>}/>
          <Route exact path='/Fayylar' render={(props)=><Fayylar {...props} />}/>
        </Switch>
      </main>
    </div>
  );
} 
