import fs from "fs";
import DB from "./db.json" assert { type: "json" };


export const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf8",
  });
};
