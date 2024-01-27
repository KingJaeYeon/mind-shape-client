const axios = require("axios");
const fs = require("fs-extra");
console.log("loadTextJson.js");

const API_KEY = "AIzaSyD4P9BKh6yMo6_RjuA6rJhP5n8ET5szCqk";
const SHEET_ID = "15qI35t2KVoXaH9XZhwi0uf7TSLUloMlbOvlkhAR2eX0";
const SHEET_LIST = ["Home", "Account", "Portfolio"];

const createJsonFormSheet = async (spreadsheetId, sheetName) => {
  const res = await axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${API_KEY}`,
  );

  const rows = res.data.values;

  if (!rows) {
    console.log("No data found.");
    return;
  }
  // 첫 번째 행은 키로 사용됩니다.
  const key = rows[0];

  for (let i = 1; i < key.length; i++) {
    let locale = rows[0][i].toLowerCase();
    let fileName = `./src/app/[locale]/i18n/locales/${locale}/${sheetName.toLowerCase()}.json`;
    let object = {};
    for (let j = 2; j < rows.length; j++) {
      object[rows[j][0]] = rows[j][i];
    }
    fs.outputFile(fileName, JSON.stringify(object, null, 2), function () {
      console.log(`${fileName} is created.`);
    });
  }
};

async function main() {
  for (let i = 0; i < SHEET_LIST.length; i++) {
    await createJsonFormSheet(SHEET_ID, SHEET_LIST[i]);
  }
}

main();
