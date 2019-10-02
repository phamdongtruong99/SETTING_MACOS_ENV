import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// eslint-disable-next-line import/prefer-default-export
export const getPDF = (content, fileName) => {
  html2canvas(content, { scale: 1 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 1, 2);
    pdf.save(`${fileName}.pdf`);
  });
};
