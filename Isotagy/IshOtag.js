import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, CardMedia, Typography } from "@material-ui/core";
import GirisLogo from "../Media/giris.jpg";
import CykysLogo from "../Media/cykys.jpg";
import ResmiLogo from "../Media/resmi.jpg";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "10%",
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(-5),
    width: theme.spacing(15),
    height: theme.spacing(15),
    boxShadow:
      "5px 5px 5px 0 rgba(0, 0, 0, 0.30), 5px 5px 5px 0 rgba(0, 0, 0, 0.30)",
  },
  title: {
    marginLeft: theme.spacing(24),
    marginTop: theme.spacing(-7),
    width: theme.spacing(30),
    borderBottom: "1px solid black",
    boxShadow: " 0 6px 3px -2px rgba(0, 0, 0, 0.20)",
  },
  subtitle: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(5),
    width: theme.spacing(17),
    borderBottom: "1px solid black",
    boxShadow: " 0 6px 3px -2px rgba(0, 0, 0, 0.20)",
  },
  subtitle2: {
    display: "flex",
    flexWrap: "wrap",
    float: "right",
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(-4),
    width: theme.spacing(17),
    borderBottom: "1px solid black",
    boxShadow: " 0 6px 3px -2px rgba(0, 0, 0, 0.20)",
  },
  subtitle3: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(5),
    width: theme.spacing(17),
    borderBottom: "1px solid black",
    boxShadow: " 0 6px 3px -2px rgba(0, 0, 0, 0.20)",
  },
  subtitle4: {
    display: "flex",
    flexWrap: "wrap",
    float: "right",
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(-4),
    width: theme.spacing(17),
    borderBottom: "1px solid black",
    boxShadow: " 0 6px 3px -2px rgba(0, 0, 0, 0.20)",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginLeft: theme.spacing(7),
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
      width: theme.spacing(55),
      height: theme.spacing(30),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={10}>
        <CardMedia
          className={classes.logo}
          component="img"
          alt="Giriş hatlar surat"
          image={GirisLogo}
        ></CardMedia>
        <Typography className={classes.title} variant="h6">
          Giriş hatlar
        </Typography>
        <Typography className={classes.subtitle} variant="h6">
          Täze
        </Typography>
        <Typography className={classes.subtitle2} variant="h6">
          Işlenilýär
        </Typography>
        <Typography className={classes.subtitle3} variant="h6">
          Arhiw
        </Typography>
        <Typography className={classes.subtitle4} variant="h6">
          Ählisi
        </Typography>
      </Paper>
      <Paper elevation={10}>
        <CardMedia
          className={classes.logo}
          component="img"
          alt="Giriş hatlar surat"
          image={CykysLogo}
        ></CardMedia>
        <Typography className={classes.title} variant="h6">
          Çykyş hatlar
        </Typography>
        <Typography className={classes.subtitle} variant="h6">
          Işlenilýär
        </Typography>
        <Typography className={classes.subtitle2} variant="h6">
          Ahriw
        </Typography>
        <Typography className={classes.subtitle3} variant="h6">
          Ählisi
        </Typography>
      </Paper>
      <Paper elevation={10}>
        <CardMedia
          className={classes.logo}
          component="img"
          alt="Giriş hatlar surat"
          image={ResmiLogo}
        ></CardMedia>
        <Typography className={classes.title} variant="h6">
          Meniň resminamalarym
        </Typography>
        <Typography className={classes.subtitle} variant="h6">
          Men Dörediji
        </Typography>
      </Paper>
    </div>
  );
}
