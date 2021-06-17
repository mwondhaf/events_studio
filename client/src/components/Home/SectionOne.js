import React from "react"
import { Box, Container, makeStyles } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"

const url_one =
  "https://images.unsplash.com/photo-1621092277192-e7c0269429a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=1600"

const useStyles = makeStyles((theme) => ({
  section_one: {
    backgroundImage: `url(${url_one})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    height: "100vh"
  },

  section_one__main_text: {
    textOverflow: "ellipsis",
    whiteSpace: "wrap",
    overflow: "hidden",
    fontSize: 70,
    fontWeight: 700,
    color: "#e6e7ea"
  },
  section_one__main_text_mobile: {
    textOverflow: "ellipsis",
    whiteSpace: "wrap",
    overflow: "hidden",
    fontSize: 40,
    fontWeight: 700,
    color: "#e6e7ea",
    marginBottom: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  section_one__button: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  },
  section_one_button_grid: {
    marginRight: theme.spacing(1),
    paddingTop: theme.spacing(5)
  }
}))
const SectionOne = () => {
  const classes = useStyles()

  return (
    <section className={classes.section_one}>
      <Container>
        <Grid container style={{ margin: 5 }}>
          <Grid item xs={12} md={6}>
            <Box display={{ xs: "none", sm: "block" }}>
              <Typography className={classes.section_one__main_text}>
                <Box lineHeight={1.1}>
                  Enjoy workspace freedom with Letswork.
                </Box>
              </Typography>
            </Box>
            <Box display={{ xs: "block", sm: "none" }}>
              <Typography className={classes.section_one__main_text_mobile}>
                <Box lineHeight={1.1}>
                  Enjoy workspace freedom with Letswork.
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} container>
            <Grid item xs={5} className={classes.section_one_button_grid}>
              <Button
                fullWidth
                className={classes.section_one__button}
                size="large"
                variant="contained"
                color="primary"
              >
                SERVICES
              </Button>
            </Grid>
            <Grid item xs={5} className={classes.section_one_button_grid}>
              <Button
                fullWidth
                className={classes.section_one__button}
                size="large"
                variant="contained"
                color="primary.light"
              >
                EQUIPMENT
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SectionOne
