type ModalEmotionType = "addEmotion" | "confirmClear" | null;

interface ModalEmotionState {
    type: ModalType;
    selectedEmotionId?: string | null;
    comment?: string;
}
