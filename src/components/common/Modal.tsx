// Modal component
export interface ModalProps {isOpen: boolean; onClose: () => void; children: React.ReactNode;}
export const Modal = ({isOpen, onClose, children}: ModalProps) => isOpen ? (
  <div onClick={onClose}>{children}</div>
) : null;
