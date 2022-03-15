import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import {
  PeopleAlt as PeopleAltIcon,
  LiveHelp as LiveHelpIcon,
  LibraryBooks as LibraryBooksIcon,
  ThumbUp as ThumbUpIcon,
  Message as MessageIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  PowerSettingsNew as PowerSettingsNewIcon
} from '@material-ui/icons';

import { Drawer, AppBar, List, CssBaseline, IconButton, ListItem, 
  ListItemIcon, ListItemText, Avatar, makeStyles, useTheme
} from '@material-ui/core';

import './styles.css';
import ModalUpdateProfile from '../ModalUpdateProfile';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "transparent",
    boxShadow: "none"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "#0A68F4 !important",
    color: "#FFF"
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: "#0A68F4 !important",
    color: "#FFF"
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const modalUpdateProfile = useRef();

  return (
    
    <div className={open && "root"}>
      <div className='modal_update_profile'>
        <ModalUpdateProfile ref={modalUpdateProfile}/>
      </div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        {open &&
          <div className='boxProfile'>
            <Avatar src="/profile.png" className='avatar'>M</Avatar>
            <h4>Matheus Oliveira</h4>
            <button onClick={() => modalUpdateProfile.current.openModal()}>editar perfil</button>
          </div>
        }
        <div className={open ? 'groupOptionsOpen' : 'groupOptionsClose'}>
          <div className='options'>
            <List>
              <a href="/requirements">
                <ListItem button key="Requerimentos">
                  <ListItemIcon>
                    <MessageIcon />
                  </ListItemIcon>
                  <ListItemText primary="Requerimentos" />
                </ListItem>
              </a>
              <a href="/legislative">
                <ListItem button key="Legislativos">
                  <ListItemIcon>
                    <PeopleAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Legislativos" />
                </ListItem>
              </a>
              <a href="/manifestos">
                <ListItem button key="Manifestos em alta">
                  <ListItemIcon>
                    <ThumbUpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Manifestos em alta" />
                </ListItem>
              </a>
              <a href="/faq">
                <ListItem button key="Perguntas Frequentes">
                  <ListItemIcon>
                    <LiveHelpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Perguntas Frequentes" />
                </ListItem>
              </a>
              <a href="/userManual">
                <ListItem button key="Manual de Uso">
                  <ListItemIcon>
                    <LibraryBooksIcon />
                  </ListItemIcon>
                  <ListItemText primary="Manual de Uso" />
                </ListItem>
              </a>
            </List>
          </div>
        </div>
        <List className={open && 'exitOpen'}>
          <a href="/exit">
            <ListItem button key="Sair">
              <ListItemIcon>
                <PowerSettingsNewIcon />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </a>
        </List>
      </Drawer>
    </div>
  );
}
