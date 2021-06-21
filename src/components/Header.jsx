import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, Divider, ListItemText } from '@material-ui/core';

const useStyle = makeStyles({
  header: {
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 0px 0px',
    padding: '0px 8px',
    alignItems: 'center',
  },
  searchBar: {
    display: 'flex',
    flex: '0 1 728px',
  },
  avatar: {
    alignSelf: 'center',
  },
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
  },
  drawerHeader: {
    padding: '0px 0px 0px 16px',
  },
  avatarArea: {
    display:'flex',
    minWidth: '225px',
    justifyContent: 'flex-end',
  },
  iconButton: {
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  searchButton: {
    backgroundColor: '#f8f8f8',
  }
});

const Header = () => {
  const classes = useStyle();
  const [drawOpen, setDrawOpen] = useState(false);
  const guideItems = ['首頁', '發燒影片', '訂閱內容'];

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        classes={{ root: classes.header }}
      >
        <div>
          <IconButton className={classes.iconButton} onClick={() => setDrawOpen(!drawOpen)}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <YouTubeIcon fontSize="large" />
          </IconButton>
        </div>
        <div className={classes.searchBar}>
          <TextField
            id="outlined-basic"
            label="搜尋"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Button variant="outlined" className={classes.searchButton}>
            <SearchIcon />
          </Button>
        </div>
        <div className={classes.avatarArea}>
          <Avatar classes={{ root: classes.avatar }}></Avatar>
        </div>
      </Grid>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        open={drawOpen}
        onClose={() => setDrawOpen(false)}
        anchor="left"
      >
        <List>
          <ListItem classes={{ root: classes.drawerHeader }}>
            <IconButton className={classes.iconButton} onClick={() => setDrawOpen(!drawOpen)}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {guideItems.map((guideItem) => (
            <ListItem>
              <ListItemText primary={guideItem} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
