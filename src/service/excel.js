import Excel from 'exceljs'
import { chunk } from '../utils/ENUM';
import { saveAs } from 'file-saver';

export const divideExcelData = async (data, chunkSize) => {
    console.log(data)

    const splitData = await chunk(data, chunkSize)
    splitData.forEach(async function (childArray, index) {
        const today = new Date();
        const date = today.toISOString().substring(0, 10);
        console.log(childArray)
        const workbook = await writeExcelData(childArray)
        await sendWorkbook(`tikiBill${index}-${date}`, workbook)
    });
}

const writeExcelData = (childArray) => {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("bill");
    worksheet.columns = [
        { key: 'clientCode', width: 40 },
    ];
    childArray.forEach((item) => {
        worksheet.addRow({ clientCode: item });
    })

    return workbook
}

async function sendWorkbook(fileName, workbook) {
    var buffer = workbook.xlsx.writeBuffer().then(function (data) {
        var blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, fileName);
    })
}