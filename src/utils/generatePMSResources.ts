import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const NHRMS_ORANGE = '#F97316';
const NHRMS_DARK = '#1A1F2C';

export const generatePMSChecklist = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(26, 31, 44);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(249, 115, 22);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('nHRMS', 20, 25);
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text('Performance Management System Implementation Checklist', 50, 25);
  
  // Subtitle
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(10);
  doc.text('A comprehensive guide to successfully implementing your PMS', 20, 50);
  
  let yPos = 65;
  
  const phases = [
    {
      title: '1. Discovery Phase',
      items: [
        'Define business objectives and success metrics',
        'Assess current performance management state',
        'Conduct stakeholder interviews and gather requirements',
        'Identify pain points and improvement opportunities',
        'Benchmark against industry best practices'
      ]
    },
    {
      title: '2. Design Phase',
      items: [
        'Select PMS framework (OKR, KPI, Balanced Scorecard, or Hybrid)',
        'Define competency models aligned with company values',
        'Create rating scales and performance criteria',
        'Design review workflows and approval processes',
        'Establish calibration and moderation processes'
      ]
    },
    {
      title: '3. Implementation Phase',
      items: [
        'Choose and configure technology platform',
        'Migrate historical performance data',
        'Train managers on coaching and feedback techniques',
        'Communicate changes to all employees',
        'Run pilot program with select teams'
      ]
    },
    {
      title: '4. Optimization Phase',
      items: [
        'Collect feedback from managers and employees',
        'Analyze completion rates and engagement metrics',
        'Refine processes based on learnings',
        'Conduct annual calibration reviews',
        'Implement continuous improvement initiatives'
      ]
    }
  ];
  
  phases.forEach((phase) => {
    // Phase header
    doc.setFillColor(249, 115, 22);
    doc.rect(15, yPos - 5, pageWidth - 30, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(phase.title, 20, yPos + 2);
    yPos += 15;
    
    // Checklist items
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    phase.items.forEach((item) => {
      // Checkbox
      doc.setDrawColor(200, 200, 200);
      doc.rect(20, yPos - 3, 4, 4);
      doc.text(item, 28, yPos);
      yPos += 8;
    });
    
    yPos += 10;
    
    // Check for page break
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }
  });
  
  // Tips section
  yPos += 5;
  doc.setFillColor(240, 240, 240);
  doc.rect(15, yPos - 5, pageWidth - 30, 35, 'F');
  
  doc.setTextColor(249, 115, 22);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Pro Tips', 20, yPos + 2);
  
  doc.setTextColor(80, 80, 80);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const tips = [
    '• Start with clear executive sponsorship and communication',
    '• Focus on continuous feedback, not just annual reviews',
    '• Train managers extensively before employee rollout',
    '• Measure adoption and engagement, not just completion'
  ];
  tips.forEach((tip, i) => {
    doc.text(tip, 20, yPos + 10 + (i * 6));
  });
  
  // Footer
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(8);
  doc.text('© nHRMS - National Human Resources Management Society | www.nhrms.com', 20, pageHeight - 10);
  
  doc.save('PMS-Implementation-Checklist.pdf');
};

export const generateGoalSettingTemplate = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(26, 31, 44);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(249, 115, 22);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('nHRMS', 20, 25);
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text('Goal-Setting Templates: SMART Goals & OKRs', 50, 25);
  
  // SMART Goals Section
  doc.setTextColor(249, 115, 22);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('SMART Goals Framework', 20, 55);
  
  doc.setTextColor(80, 80, 80);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Specific • Measurable • Achievable • Relevant • Time-bound', 20, 62);
  
  // SMART Goals Table
  autoTable(doc, {
    startY: 68,
    head: [['Goal #', 'Specific Goal', 'Measure', 'Target', 'Due Date', 'Status']],
    body: [
      ['1', '', '', '', '', '☐ Not Started'],
      ['2', '', '', '', '', '☐ Not Started'],
      ['3', '', '', '', '', '☐ Not Started'],
      ['4', '', '', '', '', '☐ Not Started'],
      ['5', '', '', '', '', '☐ Not Started'],
    ],
    theme: 'grid',
    headStyles: { 
      fillColor: [249, 115, 22],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    styles: { 
      fontSize: 9,
      cellPadding: 4,
      minCellHeight: 12
    },
    columnStyles: {
      0: { cellWidth: 15 },
      1: { cellWidth: 50 },
      2: { cellWidth: 35 },
      3: { cellWidth: 25 },
      4: { cellWidth: 25 },
      5: { cellWidth: 30 }
    }
  });
  
  // OKR Section
  let yPos = (doc as any).lastAutoTable.finalY + 20;
  
  doc.setTextColor(249, 115, 22);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('OKR (Objectives & Key Results) Framework', 20, yPos);
  
  doc.setTextColor(80, 80, 80);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Set ambitious objectives with measurable key results', 20, yPos + 7);
  
  // OKR Template
  autoTable(doc, {
    startY: yPos + 12,
    head: [['Objective 1:', '', '', '']],
    body: [
      ['Key Result 1:', '', 'Target:', ''],
      ['Key Result 2:', '', 'Target:', ''],
      ['Key Result 3:', '', 'Target:', ''],
    ],
    theme: 'grid',
    headStyles: { 
      fillColor: [26, 31, 44],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    styles: { 
      fontSize: 9,
      cellPadding: 5
    }
  });
  
  yPos = (doc as any).lastAutoTable.finalY + 10;
  
  autoTable(doc, {
    startY: yPos,
    head: [['Objective 2:', '', '', '']],
    body: [
      ['Key Result 1:', '', 'Target:', ''],
      ['Key Result 2:', '', 'Target:', ''],
      ['Key Result 3:', '', 'Target:', ''],
    ],
    theme: 'grid',
    headStyles: { 
      fillColor: [26, 31, 44],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    styles: { 
      fontSize: 9,
      cellPadding: 5
    }
  });
  
  // Example Section
  yPos = (doc as any).lastAutoTable.finalY + 15;
  
  doc.setFillColor(240, 240, 240);
  doc.rect(15, yPos - 3, pageWidth - 30, 45, 'F');
  
  doc.setTextColor(249, 115, 22);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Example OKR', 20, yPos + 5);
  
  doc.setTextColor(26, 31, 44);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Objective: Improve customer satisfaction and loyalty', 20, yPos + 15);
  
  doc.setTextColor(80, 80, 80);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const examples = [
    'KR1: Increase NPS score from 45 to 65 by Q4',
    'KR2: Reduce average response time from 24h to 4h',
    'KR3: Achieve 90% first-contact resolution rate'
  ];
  examples.forEach((ex, i) => {
    doc.text(ex, 25, yPos + 23 + (i * 6));
  });
  
  // Footer
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(8);
  doc.text('© nHRMS - National Human Resources Management Society | www.nhrms.com', 20, pageHeight - 10);
  
  doc.save('Goal-Setting-Templates-SMART-OKR.pdf');
};
