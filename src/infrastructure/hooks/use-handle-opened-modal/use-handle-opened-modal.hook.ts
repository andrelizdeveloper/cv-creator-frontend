// Modules
import { useState } from 'react';

// Types
import { UseHandleOpenedModalHookReturn } from './use-handle-opened-modal.types';

export function useHandleOpenedModalHook<T>(): UseHandleOpenedModalHookReturn<T> {
    const [whichModalIsOpen, setWhichModalIsOpen] = useState<T | null>(null);

    function getIsModalOpen(modalName: T): boolean {
        return whichModalIsOpen === modalName;
    }

    function closeModal(): void {
        setWhichModalIsOpen(null);
    }

    return {
        whichModalIsOpen,
        setWhichModalIsOpen,
        getIsModalOpen,
        closeModal,
    };
}
