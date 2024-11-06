const { pool } = require("./database-config");
const { db } = require("./database-queries");

async function createTable() {
  const response = await pool.query(db.createTable);

  if (response.rowCount) return response;
  else return null;
}

async function addNewVisitor(
  fullname,
  age,
  dateOfVisit,
  timeOfVisit,
  comments,
  assistant
) {
  const response = await pool.query(db.addNewVisitor, [
    fullname,
    age,
    dateOfVisit,
    timeOfVisit,
    comments,
    assistant,
  ]);

  if (response.rowCount) return response;
  else return null;
}

async function listAllVisitors() {
  const response = await pool.query(db.listAllVisitors);
  if (response.rowCount) return response.rows;
  else return null;
}

async function viewVisitor(id) {
  const response = await pool.query(db.viewVisitor, [id]);

  if (response.rowCount) return response.rows[0];
  else return null;
}

async function updateVisitor(id, column, value) {
  const response = await pool.query(db.updateVisitor(column), [value, id]);

  if (response.rowCount) return response.rows[0];
  else return null;
}

async function deleteVisitor(id) {
  const response = await pool.query(db.deleteVisitor, [id]);

  if (response.rowCount) return response;
  else return null;
}

async function deleteAllVisitors() {
  const response = await pool.query(db.deleteAllVisitors);

  if (response.rowCount) return response;
  else return null;
}

async function viewLastVisitor() {
  const response = await pool.query(db.viewLastVisitor);

  if (response.rows) return response.rows[0].id;
  return null;
}

module.exports = {
  createTable,
  addNewVisitor,
  listAllVisitors,
  viewVisitor,
  updateVisitor,
  deleteVisitor,
  deleteAllVisitors,
  viewLastVisitor,
};

// test database functions

// createTable().then(console.log);

// addNewVisitor(
//   "Johnny Test",
//   18,
//   "12-12-2012",
//   "12:00",
//   "not bad",
//   "Benjamin Tennyson"
// ).then(console.log);

// addNewVisitor(
//   "Johnny TestTwo",
//   18,
//   "12-12-2012",
//   "12:00",
//   "not bad",
//   "Benjamin TennysonTwo"
// ).then(console.log);

// listAllVisitors().then(console.log);

// viewLastVisitor().then(console.log);

// updateVisitor(2, "fullname", "Ben Benjamin").then(console.log);

// deleteVisitor(2).then(console.log);

// deleteAllVisitors().then(console.log);
