import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { analyticsSheetsConfig } from '../commpro/src/data/analytics-sheets-config';

const SHEET_ID = '1EU9bIgYr0QTdZNRmR1YUwkHmAW9xmJ5ylZTecsT-rSY';
const KEYFILE = './service-account.json';

async function fetchAllSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILE,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  const analyticsTables = [];

  for (const cfg of analyticsSheetsConfig) {
    const range = `${cfg.sheet}!${cfg.range}`;
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range,
    });
    const meta = await sheets.spreadsheets.get({
      spreadsheetId: SHEET_ID,
      ranges: [range],
      includeGridData: true,
    });
    const rows = res.data.values || [];
    const merges: { [key: string]: { rowspan: number; colspan: number } } = {};
    const gridData = meta.data.sheets?.[0].data?.[0];
    if (gridData?.rowData) {
      (meta.data.sheets?.[0].merges || []).forEach((merge) => {
        const key = `${merge.startRowIndex},${merge.startColumnIndex}`;
        merges[key] = {
          rowspan: (merge.endRowIndex! - merge.startRowIndex!),
          colspan: (merge.endColumnIndex! - merge.startColumnIndex!),
        };
      });
    }
    const table = rows.map((row, i) =>
      row.map((value, j) => {
        const merge = merges[`${i},${j}`];
        return {
          value,
          ...(merge?.rowspan > 1 ? { rowspan: merge.rowspan } : {}),
          ...(merge?.colspan > 1 ? { colspan: merge.colspan } : {}),
        };
      })
    );
    analyticsTables.push({
      name: cfg.name,
      data: table,
    });
  }

  const outPath = path.resolve(__dirname, '../commpro/src/data/analytics-tables.ts');
  fs.writeFileSync(
    outPath,
    `export interface TableCell { value: string; colspan?: number; rowspan?: number; }\n` +
      `export interface AnalyticsTable { name: string; data: TableCell[][]; }\n` +
      `export const analyticsTables: AnalyticsTable[] = ${JSON.stringify(analyticsTables, null, 2)};\n`
  );
  console.log('Таблицы успешно сохранены!');
}

fetchAllSheets().catch(console.error); 