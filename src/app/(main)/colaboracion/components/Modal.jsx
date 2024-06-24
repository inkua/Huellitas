import DonaDineroContent from "./DonaDineroContent.jsx";
import DonaInsumosContent from "./DonaInsumosContent.jsx";
import DonaServiciosContent from "./DonaServiciosContent.jsx";

function Modal({ isOpenD, isOpenI, isOpenS, onClose }) {
  if (!isOpenD && !isOpenI && !isOpenS) return null;

  return (
    <div
      className="absolute h-full inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
      role="section"
    >
      <div
        className="relative max-w-[90vw] top-[20vh] mx-auto lg:gap-14 px-12 py-10 lg:p-10 bg-white rounded-3xl overflow-y-clip"
        role="contentInfo"
      >
        <button
          className="absolute top-0 right-0 mr-6 mt-4 text-black"
          onClick={onClose}
        >
          ×
        </button>

        {isOpenD && <DonaDineroContent />}

        {isOpenI && <DonaInsumosContent />}

        {isOpenS && <DonaServiciosContent />}
        
      </div>
    </div>
  );
}

export default Modal;
