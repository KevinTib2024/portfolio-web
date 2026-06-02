import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Configurar el worker de PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function CVViewer() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.5);
  const [isOpen, setIsOpen] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Kevin_Tibaquicha_CV.pdf';
    link.click();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors font-medium pointer-events-auto"
      >
        Descargar CV ↓
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Mi CV</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-between p-4 bg-gray-100 border-b gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
              ← Anterior
            </button>
            
            <span className="text-gray-700 font-medium">
              Página {pageNumber} de {numPages}
            </span>
            
            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
              Siguiente →
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setScale(Math.max(0.75, scale - 0.25))}
              className="px-3 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              🔍−
            </button>
            
            <span className="text-gray-700 font-medium w-16 text-center">
              {Math.round(scale * 100)}%
            </span>
            
            <button
              onClick={() => setScale(Math.min(3, scale + 0.25))}
              className="px-3 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              🔍+
            </button>

            <button
              onClick={downloadPDF}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"
            >
              ⬇️ Descargar
            </button>
          </div>
        </div>

        {/* Visor PDF */}
        <div className="flex-1 overflow-auto bg-gray-200 flex justify-center p-4">
          <div className="bg-white shadow-lg">
            <embed
              src="/cv.pdf#page=1"
              type="application/pdf"
              width={`${800 * scale}px`}
              height={`${1050 * scale}px`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}