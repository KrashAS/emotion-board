import { makeAutoObservable } from "mobx";

interface ModalState {
    type: ModalType;
    selectedEmotionId?: string | null;
    comment?: string;
}

class ModalStore {
    modalState: ModalState = {
        type: null,
        selectedEmotionId: null,
        comment: "",
    };

    constructor() {
        makeAutoObservable(this);
    }

    open = (type: ModalType, params?: Partial<ModalState>) => {
        this.modalState.type = type;
        if (params?.selectedEmotionId !== undefined) {
            this.modalState.selectedEmotionId = params.selectedEmotionId;
        }
        if (params?.comment !== undefined) {
            this.modalState.comment = params.comment;
        }
    };

    close = () => {
        this.modalState = {
            type: null,
            selectedEmotionId: null,
            comment: "",
        };
    };

    setComment = (text: string) => {
        this.modalState.comment = text;
    };

    setSelectedEmotion = (id: string | null) => {
        this.modalState.selectedEmotionId = id;
    };
}

export const modalStore = new ModalStore();
