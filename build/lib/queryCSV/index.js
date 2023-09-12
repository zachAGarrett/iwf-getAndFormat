"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const sqlite3 = require("sqlite3").verbose();
const queryCSV = () => {
    // Create an SQLite in-memory database
    const db = new sqlite3.Database(":memory:");
    // Read the CSV file and create a table in the SQLite database
    fs_1.default.createReadStream("./src/lib/queryCSV/target.csv")
        .pipe((0, csv_parser_1.default)())
        .on("data", (row) => {
        // Assuming the first row of your CSV contains column headers
        if (!db.tableCreated) {
            const createTableQuery = `CREATE TABLE data (${Object.keys(row).join(", ")})`;
            db.run(createTableQuery);
            db.tableCreated = true;
        }
        // Insert data into the SQLite database
        const insertDataQuery = `INSERT INTO data VALUES (${Object.values(row)
            .map((value) => `'${value}'`)
            .join(", ")})`;
        db.run(insertDataQuery);
    })
        .on("end", () => {
        // Now you can query the data like a database
        db.all("SELECT * FROM data", (err, rows) => {
            if (err) {
                console.error(err.message);
                return;
            }
            console.log(rows);
        });
    });
};
exports.default = queryCSV;
