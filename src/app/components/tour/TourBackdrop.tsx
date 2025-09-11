import React from "react";

type TourBackdropProps = {
  targetRect: DOMRect | null;
  onClose: () => void;
};

const TourBackdrop: React.FC<TourBackdropProps> = ({ targetRect, onClose }) => {
  return (
    <>
      {targetRect ? (
        <>
          <div
            className="fixed top-0 left-0 w-full bg-black/50 z-[999]"
            style={{ height: targetRect.top }}
            onClick={onClose}
          />
          <div
            className="fixed left-0 w-full bg-black/50 z-[999]"
            style={{
              top: targetRect.bottom,
              height: `calc(100% - ${targetRect.bottom}px)`,
            }}
            onClick={onClose}
          />
          <div
            className="fixed top-0 left-0 bg-black/50 z-[999]"
            style={{
              top: targetRect.top,
              width: targetRect.left,
              height: targetRect.height,
            }}
            onClick={onClose}
          />
          <div
            className="fixed top-0 bg-black/50 z-[999]"
            style={{
              top: targetRect.top,
              left: targetRect.right,
              width: `calc(100% - ${targetRect.right}px)`,
              height: targetRect.height,
            }}
            onClick={onClose}
          />
        </>
      ) : (
        <div className="fixed inset-0 bg-black/50 z-[999]" onClick={onClose} />
      )}
    </>
  );
};

export default TourBackdrop;
