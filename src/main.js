const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

db.exec("CREATE TABLE Users (ID TEXT PRIMARY KEY)", CallbackFunc);