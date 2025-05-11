import { ModalContent, ModalOverlay } from "../../../styles/layout/modals/Modals";

export default function ModalEditPesquisa({ onClose, children }) {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
}
