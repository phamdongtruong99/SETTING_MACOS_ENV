import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const exportDataToPDF = (content, fileName) => {
  html2canvas(content, { scale: 1 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 1, 2);
    pdf.save(`${fileName}.pdf`);
  });
};

export const exportDataToExcel = (content, fileName) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const ws = XLSX.utils.json_to_sheet(content);
  const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, {
    bookType: 'xlsx',
    type: 'array',
  });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};
