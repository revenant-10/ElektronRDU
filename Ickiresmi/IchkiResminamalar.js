import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { TableHead } from "@material-ui/core";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat, ady, sady) {
  return { name, calories, fat, ady, sady };
}

const rows = [
  createData("12/3", "20.02.2020", "Cupcake", 305, 3.7),
  createData("12/3", "20.02.2020", "Donut", 452, 25.0),
  createData("12/3", "20.02.2020", "Eclair", 262, 16.0),
  createData("12/3", "20.02.2020", "Frozen yoghurt", 159, 6.0),
  createData("12/3", "20.02.2020", "Gingerbread", 356, 16.0),
  createData("12/3", "20.02.2020", "Honeycomb", 408, 3.2),
  createData("12/3", "20.02.2020", "Ice cream sandwich", 237, 9.0),
  createData("12/3", "20.02.2020", "Jelly Bean", 375, 0.0),
  createData("12/3", "20.02.2020", "KitKat", 518, 26.0),
  createData("12/3", "20.02.2020", "Lollipop", 392, 0.2),
  createData("12/3", "20.02.2020", "Marshmallow", 318, 0),
  createData("12/3", "20.02.2020", "Nougat", 360, 19.0),
  createData("12/3", "20.02.2020", "Oreo", 437, 18.0),
  createData("12/3", "20.02.2020", "Ice cream sandwich", 237, 9.0),
  createData("12/3", "20.02.2020", "Jelly Bean", 375, 0.0),
  createData("12/3", "20.02.2020", "KitKat", 518, 26.0),
  createData("12/3", "20.02.2020", "Lollipop", 392, 0.2),
  createData("12/3", "20.02.2020", "Marshmallow", 318, 0),
  createData("12/3", "20.02.2020", "Nougat", 360, 19.0),
  createData("12/3", "20.02.2020", "Oreo", 437, 18.0),
  createData("12/3", "20.02.2020", "KitKat", 518, 26.0),
  createData("12/3", "20.02.2020", "Lollipop", 392, 0.2),
  createData("12/3", "20.02.2020", "Marshmallow", 318, 0),
  createData("12/3", "20.02.2020", "Nougat", 360, 19.0),
  createData("12/3", "20.02.2020", "Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 30 }}>Giriş belgisi</TableCell>
            <TableCell style={{ width: 30 }} align="left">
              Giriş senesi
            </TableCell>
            <TableCell align="left">Kimden</TableCell>
            <TableCell align="left">Kime</TableCell>
            <TableCell align="left">Hatyň görnüşi</TableCell>
            <TableCell align="left">Möhleti</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell
                style={{ width: 30 }}
                align="left"
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell style={{ width: 30 }} align="left">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 190 }} align="left">
                {row.fat}
              </TableCell>
              <TableCell style={{ width: 190 }} align="left">
                {row.fat}
              </TableCell>
              <TableCell style={{ width: 100 }} align="left">
                {row.ady}
              </TableCell>
              <TableCell style={{ width: 100 }} align="left">
                {row.sady}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
