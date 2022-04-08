import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const el = useRef(document.createElement('div'));
  const modalRoot = document.querySelector('#modal-root') as HTMLElement;

  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current;

    // We assume `modalRoot` exists with '!'
    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, [modalRoot]);

  return createPortal(
    <div className="w-full h-full fixed left-0 top-0">
      <div className="w-full h-full bg-gray-700 opacity-90 z-0 absolute left-0 top-0" />
      <div className="z-10 relative flex w-full h-full">
        <div className="bg-white rounded-lg p-8  max-w-4xl m-auto">{children}</div>
      </div>
    </div>,
    el.current
  );
};
