import DonaDineroContent from "./DonaDineroContent.jsx";
import DonaInsumosContent from "./DonaInsumosContent.jsx";
import DonaServiciosContent from "./DonaServiciosContent.jsx";

function Modal({ isOpenD, isOpenI, isOpenS, onClose }) {
  if (!isOpenD && !isOpenI && !isOpenS) return null;

  return (
    <div className="flex fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="flex fixed inset-0 justify-center items-center max-w-screen-2xl mx-auto" role="section">
        {isOpenD && <DonaDineroContent onClose={onClose} />}

        {isOpenI && <DonaInsumosContent onClose={onClose} />}

        {isOpenS && <DonaServiciosContent onClose={onClose} />}
      </div>
    </div>
  );
}

export default Modal;
