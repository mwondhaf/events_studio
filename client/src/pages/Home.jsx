import { Container, makeStyles } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import "../css/Home.css"
import SectionOne from "../components/Home/SectionOne"

const useStyles = makeStyles((theme) => ({}))

const Home = () => {
  const classes = useStyles()
  return (
    <div className="container">
      <SectionOne />
      <section style={{ background: "red" }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              two
            </Grid>
          </Grid>
        </Container>
      </section>
      <section style={{ background: "green" }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              three
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  )
}

export default Home
