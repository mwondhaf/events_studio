import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Box from "@material-ui/core/Box"
import { mainMenu } from "../../menu/menu"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
  menu_links: {
    textDecoration: "none",
    color: "#CAD4E5"
  },
  menu_item: {
    paddingRight: theme.spacing(1)
  }
}))

const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" elevation={0} color="inherit">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Photos</Link>
            </Typography>

            <div>
              <Box display="flex" flexDirection="row-reverse">
                <Box className={classes.menu_item}>
                  <Button
                    borderRadius={16}
                    color="primary"
                    variant="contained"
                    disableElevation
                  >
                    Signup
                  </Button>
                </Box>

                {mainMenu.map((item) => (
                  <Box key={item.item} className={classes.menu_item}>
                    <Link to={item.url} className={classes.menu_links}>
                      <Button>{item.item}</Button>
                    </Link>
                  </Box>
                ))}
              </Box>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default Header
