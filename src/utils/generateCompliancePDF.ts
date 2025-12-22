import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { labourLawCompliances, stateWisePTDueDates, type ComplianceItem } from '@/data/complianceCalendar';

export function generateCompliancePDF(
  activeTab: 'labour-law' | 'state-pt',
  filteredCompliances?: ComplianceItem[],
  selectedFrequency?: string
) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Header
  doc.setFillColor(30, 58, 138); // primary blue
  doc.rect(0, 0, pageWidth, 35, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Labour Law Compliance Calendar', pageWidth / 2, 15, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('FY 2024-25 | nHRMS', pageWidth / 2, 23, { align: 'center' });
  
  doc.setFontSize(10);
  doc.text(`Generated on: ${currentDate}`, pageWidth / 2, 30, { align: 'center' });

  // Reset text color
  doc.setTextColor(0, 0, 0);

  if (activeTab === 'labour-law') {
    generateLabourLawPDF(doc, filteredCompliances || labourLawCompliances, selectedFrequency);
  } else {
    generateStatePTPDF(doc);
  }

  // Footer on all pages
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      'Disclaimer: This is for informational purposes only. Verify with latest government notifications.',
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
    doc.text(
      `Page ${i} of ${pageCount} | © nHRMS - www.nhrms.com`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 5,
      { align: 'center' }
    );
  }

  // Save the PDF
  const filename = activeTab === 'labour-law' 
    ? `Labour_Law_Compliance_Calendar_${selectedFrequency !== 'All' ? selectedFrequency + '_' : ''}${new Date().toISOString().split('T')[0]}.pdf`
    : `State_PT_Due_Dates_${new Date().toISOString().split('T')[0]}.pdf`;
  
  doc.save(filename);
}

function generateLabourLawPDF(doc: jsPDF, compliances: ComplianceItem[], selectedFrequency?: string) {
  const frequencyOrder = ['Monthly', 'Quarterly', 'Half-Yearly', 'Annual', 'As Required'];
  
  // Group by frequency
  const groupedByFrequency = compliances.reduce((acc, item) => {
    if (!acc[item.frequency]) {
      acc[item.frequency] = [];
    }
    acc[item.frequency].push(item);
    return acc;
  }, {} as Record<string, ComplianceItem[]>);

  let startY = 45;

  // Title for the section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 58, 138);
  doc.text(
    selectedFrequency && selectedFrequency !== 'All' 
      ? `${selectedFrequency} Labour Law Compliances` 
      : 'All Labour Law Compliances',
    14,
    startY
  );
  startY += 10;

  frequencyOrder.forEach((frequency) => {
    const items = groupedByFrequency[frequency];
    if (!items?.length) return;

    // Check if we need a new page
    if (startY > 250) {
      doc.addPage();
      startY = 20;
    }

    // Frequency header
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(`${frequency} Compliances (${items.length})`, 14, startY);
    startY += 5;

    // Table
    autoTable(doc, {
      startY: startY,
      head: [['Compliance', 'Act', 'Form', 'Due Date', 'Penalty']],
      body: items.map(item => [
        item.requirement,
        item.act,
        item.formNo,
        item.dueDate,
        item.penalty || 'As per act'
      ]),
      headStyles: {
        fillColor: [30, 58, 138],
        textColor: [255, 255, 255],
        fontSize: 9,
        fontStyle: 'bold'
      },
      bodyStyles: {
        fontSize: 8,
        cellPadding: 3
      },
      columnStyles: {
        0: { cellWidth: 40 },
        1: { cellWidth: 45 },
        2: { cellWidth: 25 },
        3: { cellWidth: 35 },
        4: { cellWidth: 35 }
      },
      alternateRowStyles: {
        fillColor: [245, 247, 250]
      },
      margin: { left: 14, right: 14 },
      didDrawPage: (data) => {
        startY = data.cursor?.y || 20;
      }
    });

    // Get the final Y position after the table
    startY = (doc as any).lastAutoTable.finalY + 15;
  });
}

function generateStatePTPDF(doc: jsPDF) {
  let startY = 45;

  // Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 58, 138);
  doc.text('State-wise Professional Tax Due Dates', 14, startY);
  startY += 10;

  // Table
  autoTable(doc, {
    startY: startY,
    head: [['State', 'Due Date', 'Applicable Act', 'Form']],
    body: stateWisePTDueDates.map(item => [
      item.state,
      `${item.dueDate} of month`,
      item.act,
      item.form
    ]),
    headStyles: {
      fillColor: [30, 58, 138],
      textColor: [255, 255, 255],
      fontSize: 10,
      fontStyle: 'bold'
    },
    bodyStyles: {
      fontSize: 9,
      cellPadding: 4
    },
    columnStyles: {
      0: { cellWidth: 35 },
      1: { cellWidth: 30 },
      2: { cellWidth: 70 },
      3: { cellWidth: 35 }
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250]
    },
    margin: { left: 14, right: 14 }
  });
}
