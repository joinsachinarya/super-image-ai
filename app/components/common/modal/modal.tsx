'use client';

import React, { useEffect, useRef } from 'react';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  handleCloseOutside?: () => void;
  className?: {
    dialog?: string;
    overlay?: string;
    container?: string;
  };
}

const Modal: React.FC<ModalProps> = ({ open, children, handleCloseOutside, className }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      // Open the dialog if not already open.
      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    } else {
      // Close the dialog if open.
      if (dialogRef.current && dialogRef.current.open) {
        dialogRef.current.close();
      }
    }
  }, [open]);

  // Called when clicking on the overlay (outside the modal content).
  const onClose = () => {
    if (handleCloseOutside) {
      handleCloseOutside();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={`fixed inset-0 flex items-center justify-center z-50 p-0 border-0 bg-transparent ${className?.dialog || ''}`}
      onClick={onClose}
    >
      <div className={`fixed w-full h-full !bg-black/90 ${className?.overlay || ''}`} > <span className='invisible'>.</span> </div>
      <div
        className={`z-[9999] relative bg-mentorai-bg-strong rounded-xl ${className?.container || ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
