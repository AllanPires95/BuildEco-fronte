import React from "react";
import "./Home.css";
import { Box, Card, CardActions, CardContent } from "@mui/material";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Carousel } from "@trendyol-js/react-carousel";
import { Link } from "react-router-dom";
import { post } from "../../services/Service";

function Home() {
  return (
    <div>
      <Grid container>
        <img
          className="imgbanner"
          src="https://i.imgur.com/N4CTh7j.png"
          alt="banner"
        />
      </Grid>

      <Grid className="txt3" xs={12}>
        <Box paddingTop="0px" height="300px">
          <Typography className="t1">
            <h1>Confira os produtos mais procurados </h1>

            <Box>
              <Carousel show={4} slide={1} className="txt2">
                <img src="https://i.imgur.com/hgWSsu5.png" className="img" />

                <img src="https://i.imgur.com/ZWBgnhH.png" className="img" />

                <img src="https://i.imgur.com/d2KpdYI.png" className="img" />

                <img src="https://i.imgur.com/sGBudNJ.png" className="img" />

                <img src="https://i.imgur.com/hgWSsu5.png" className="img" />

                <img src="https://i.imgur.com/ZWBgnhH.png" className="img" />

                <img src="https://i.imgur.com/d2KpdYI.png" className="img" />

                <img src="https://i.imgur.com/sGBudNJ.png" className="img" />
              </Carousel>
            </Box>
          </Typography>
        </Box>
      </Grid>

      <Grid container justifyContent="center" alignContent="center">
        <Grid>
          <Box className="img2">
            <Link to="/produto ">
              <img
                src="https://i.imgur.com/IBC9ZyS.png"
                alt="card1"
                className="img2"/>
            </Link>
          </Box>
        </Grid>

        <Grid xs={3}>
          <Box m={1}>
            <Card className="cardprod" variant="elevation">
              <CardContent>
                <h1 className="txtprod">Tijolo Eco</h1>
                <img
                  src="https://i.imgur.com/vNE92qo.jpg"
                  alt="tijolo"
                  className="img"
                />
                <h2 className="txtprod">R$1,50</h2>
              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center">
                  <Link to={`/produto`} className="text-decorator-none">
                    <Box marginLeft={9} marginBottom={4} textAlign="center">
                      <Button
                        className="botao"
                        variant="contained"
                        size="small"
                        style={{ color: "white" }}
                      >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Grid>

        <Grid xs={3} alignItems="center">
          <Box m={1}>
            <Card className="cardprod" variant="elevation">
              <CardContent>
                <h1 className="txtprod">Tijolo Can</h1>
                <img
                  src="https://i.imgur.com/nEYb5oc.png"
                  alt="tijolo"
                  className="img"
                />
                <h2 className="txtprod">R$1,75</h2>
              </CardContent>

              <CardActions>
                <Box>
                  <Link to={`/produto`} className="text-decorator-none">
                    <Box marginLeft={7} marginBottom={4} textAlign="center">
                      <Button
                        variant="contained"
                        className="btnprod"
                        size="small"
                        style={{ color: "white" }}
                      >
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Box>
          <img
            className="imgbanner"
            src="https://i.imgur.com/MPxG30p.jpg"
            alt="banner informativo"
          />
        </Box>
      </Grid>

      <Grid container justifyContent="center" alignContent="center">
        <Grid xs={3}>
          <Box m={1}>
            <Card className="cardprod" variant="elevation">
              <CardContent>
                <h1 className="txtprod">Telha Rec</h1>
                <img
                  src="https://i.imgur.com/vXBNDR0.jpg"
                  alt="tijolo"
                  className="img"
                />
                <h2 className="txtprod">R$80,00</h2>
              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center">
                  <Link to={`/produto`} className="text-decorator-none">
                    <Box marginLeft={9} marginBottom={4} textAlign="center">
                      <Button
                        className="botao"
                        variant="contained"
                        size="small"
                        style={{ color: "white" }}>
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Grid>

        <Grid xs={3}>
          <Box m={1}>
            <Card className="cardprod" variant="elevation">
              <CardContent>
                <h1 className="txtprod">Telha Eco</h1>
                <img
                  src="https://i.imgur.com/j8unlrI.jpg"
                  alt="tijolo"
                  className="img"
                />
                <h2 className="txtprod">R$95,00</h2>
              </CardContent>

              <CardActions>
                <Box>
                  <Link to={`/produto`} className="text-decorator-none">
                    <Box marginLeft={6} marginBottom={4} textAlign="center">
                      <Button
                        variant="contained"
                        className="btnprod"
                        size="small"
                        style={{ color: "white" }}>
                        COMPRAR
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        
          <Box className='img2'>
            <Link to= '/produto '>
            <img src="https://i.imgur.com/jXw48rm.png" alt="telhaeco1" className='img2' />
            </Link>
          </Box>
        
      </Grid>
    </div>
  );
}
export default Home;
