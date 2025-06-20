"use client"
import { modalStore } from "@/stores/modalStore";
import { observer } from "mobx-react-lite";
import AddEmotionModal from "./AddEmotionModal";
import ConfirmClearModal from "./ConfirmClearModal";

const ModalRoot = observer(() => {
    const { modalState } = modalStore;

    if (modalState.type === null) return null;

    switch (modalState.type) {
        case "addEmotion":
            return <AddEmotionModal />;
        case "confirmClear":
            return <ConfirmClearModal />;
        default:
            return null;
    }
});

export default ModalRoot;
