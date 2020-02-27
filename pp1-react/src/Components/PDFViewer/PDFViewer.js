import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

const ResumePDFViewer = () => {
    return (
      <PDFViewer
        document={{
          url: './BradKaesResume.pdf'
        }}
        />
    )
  }
export default ResumePDFViewer;