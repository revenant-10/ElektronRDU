import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tablehead: {
    background: "#dbdbdb",
    maxHeight: "10px",
  },
  maintable: {
    marginLeft: theme.spacing(6.6),
    maxWidth: "91.5%",
  },
  title: {
    float: "Left",
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(1),
    width: theme.spacing(25),
    borderBottom: "1px solid black",
    boxShadow: " 0 6px 3px -2px rgba(0, 0, 0, 0.20)",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "20.02.2020", "20.02.2020"),
  createData("Ice cream sandwich", "20.02.2020", "20.02.2020"),
  createData("Eclair", "20.02.2020", "20.02.2020"),
  createData("Cupcake", "20.02.2020", "20.02.2020"),
  createData("Gingerbread", "20.02.2020", "20.02.2020"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer
      className={classes.maintable}
      component={Paper}
      elevation={10}
    >
      <Typography className={classes.title} variant="h6">
        Soňky resminamalar
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tablehead}>
          <TableRow>
            <TableCell>Ady</TableCell>
            <TableCell align="right">Döredilen senesi</TableCell>
            <TableCell align="right">Üýtgedilen senesi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
