function filterQuery(params) {
  var sql = `SELECT c.name,c.roll,(SUM(c.midSem)+SUM(c.endSem)+SUM(c.TA)+SUM(c.quiz)) AS grandtotal FROM combine c GROUP BY c.name,c.roll `;
  if (params == "Descending") {
    sql = sql + "ORDER BY grandtotal DESC";
  } else if (params == "Ascending") {
    sql = sql + "ORDER BY grandtotal ASC";
  } else if (params == "Back") {
    sql = sql + "HAVING grandtotal < 35";
  }else if(params == "Pass"){
    sql = sql + "HAVING grandtotal > 35";
  }else {
    sql = sql + "ORDER BY roll";
  }
  return sql;
}

module.exports = filterQuery;
