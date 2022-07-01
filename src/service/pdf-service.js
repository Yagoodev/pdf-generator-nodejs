const PDFDocument = require("pdfkit");

function BuildPDF() {
  const doc = new PDFDocument;

  doc.fontSize(25)
  doc.text("Some heading");
  doc.end();
}

module.exports = { BuildPDF };