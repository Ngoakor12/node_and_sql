"use strict";
const { pool } = require("../src/database-config");
const { db } = require("../src/database-queries");
const {
  createTable,
  addNewVisitor,
  listAllVisitors,
  viewVisitor,
  updateVisitor,
  deleteVisitor,
  deleteAllVisitors,
} = require("../src/index");

const visitor = {
  id: "1",
  fullname: "Johnny Test",
  age: 23,
  dateOfVisit: "23-06-2022",
  timeOfVisit: "17:31",
  assistant: "ad min",
  comments: "This is a comment",
};

const { id, fullname, age, dateOfVisit, timeOfVisit, comments, assistant } =
  visitor;

beforeEach(() => {
  spyOn(pool, "query");
});

describe("createTable", () => {
  it("should check that createTable function is called once with the correct arguments", () => {
    createTable();
    expect(pool.query).toHaveBeenCalledOnceWith(db.createTable);
  });
});

describe("addNewVisitor", () => {
  it("should check that addNewVisitor function is called once with the correct arguments", () => {
    addNewVisitor(fullname, age, dateOfVisit, timeOfVisit, comments, assistant);
    expect(pool.query).toHaveBeenCalledOnceWith(db.addNewVisitor, [
      fullname,
      age,
      dateOfVisit,
      timeOfVisit,
      comments,
      assistant,
    ]);
  });
});

describe("listAllVisitors", () => {
  it("should check that listAllVisitors function is called once with the correct arguments", () => {
    listAllVisitors();
    expect(pool.query).toHaveBeenCalledOnceWith(db.listAllVisitors);
  });
});

describe("viewVisitor", () => {
  it("should check that viewVisitor function is called once with the correct arguments", () => {
    viewVisitor(visitor.id);
    expect(pool.query).toHaveBeenCalledOnceWith(db.viewVisitor, [visitor.id]);
  });
});

describe("updateVisitor", () => {
  it("should check that updateVisitor function is called once with the correct arguments", () => {
    const [visitorId, column, value] = [id, "fullname", "Benny Butcher"];
    updateVisitor(visitorId, column, value);
    expect(pool.query).toHaveBeenCalledOnceWith(db.updateVisitor(column), [
      value,
      visitorId,
    ]);
  });
});

describe("deleteVisitor", () => {
  it("should check that deleteVisitor function is called once with the correct arguments", () => {
    deleteVisitor(visitor.id);
    expect(pool.query).toHaveBeenCalledOnceWith(db.deleteVisitor, [visitor.id]);
  });
});

describe("deleteAllVisitors", () => {
  it("should check that deleteAllVisitors function is called once with the correct arguments", () => {
    deleteAllVisitors();
    expect(pool.query).toHaveBeenCalledOnceWith(db.deleteAllVisitors);
  });
});
