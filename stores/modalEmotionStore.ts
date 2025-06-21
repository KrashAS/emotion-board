import { makeAutoObservable } from "mobx";

class ModalEmotionStore {
    modalEmotionState: ModalEmotionState = {
        type: null,
        selectedEmotionId: null,
        comment: "",
    };

    constructor() {
        makeAutoObservable(this);
    }

    open = (type: ModalEmotionType, params?: Partial<ModalEmotionState>) => {
        this.modalEmotionState.type = type;
        if (params?.selectedEmotionId !== undefined) {
            this.modalEmotionState.selectedEmotionId = params.selectedEmotionId;
        }
        if (params?.comment !== undefined) {
            this.modalEmotionState.comment = params.comment;
        }
    };

    close = () => {
        this.modalEmotionState = {
            type: null,
            selectedEmotionId: null,
            comment: "",
        };
    };

    setComment = (text: string) => {
        this.modalEmotionState.comment = text;
    };

    setSelectedEmotion = (id: string | null) => {
        this.modalEmotionState.selectedEmotionId = id;
    };
}

export const modalEmotionStore = new ModalEmotionStore();
