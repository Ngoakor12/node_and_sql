const db = {
  createTable: `CREATE TABLE IF NOT EXISTS visitors
    (id serial primary key,
    fullname varchar,
    age int,
    dateOfVisit date,
    timeOfVisit time,
    comments varchar,
    assistant varchar);`,
  addNewVisitor: `INSERT INTO visitors(fullname, age, dateOfVisit, timeOfVisit, comments, assistant)
    VALUES($1,$2,$3,$4,$5,$6);`,
  addNewVisitorAndGetId: `INSERT INTO visitors(fullname, age, dateOfVisit, timeOfVisit, comments, assistant)
    VALUES($1,$2,$3,$4,$5,$6) RETURNING id;`,
  listAllVisitors: `SELECT id, fullname FROM visitors;`,
  viewVisitor: `SELECT * FROM visitors WHERE id=$1;`,
  updateVisitor(column) {
    return `UPDATE visitors SET ${column}=$1 WHERE id=$2`;
  },
  deleteVisitor: `DELETE FROM visitors WHERE id=$1;`,
  deleteAllVisitors: `DELETE FROM visitors;`,
  viewLastVisitor: `SELECT * FROM visitors ORDER BY id DESC LIMIT 1`,
};

module.exports = { db };
