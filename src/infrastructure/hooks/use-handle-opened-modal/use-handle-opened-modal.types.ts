export interface UseHandleOpenedModalHookReturn<T> {
    whichModalIsOpen: T | null;
    setWhichModalIsOpen: (modalName: T | null) => void;
    getIsModalOpen: (modalName: T) => boolean;
    closeModal: () => void;
}
