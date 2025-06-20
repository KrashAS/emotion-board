import { makeAutoObservable } from "mobx";

class ModalStore {
    isOpen = false;
    selectedEmotionId: string | null = null;
    comment = "";

    constructor() {
        makeAutoObservable(this);
    }

    open() {
        this.isOpen = true;
        this.selectedEmotionId = null;
        this.comment = "";
    }

    close = () => {
        this.isOpen = false;
        this.selectedEmotionId = null;
        this.comment = "";
    };

    setEmotion = (id: string) => {
        this.selectedEmotionId = id;
    };

    setComment = (text: string) => {
        this.comment = text;
    };
}

export const modalStore = new ModalStore();
