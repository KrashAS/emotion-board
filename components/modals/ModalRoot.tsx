"use client"
import { modalEmotionStore } from "@/stores/modalEmotionStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import AddEmotionModal from "./AddEmotionModal";
import ConfirmClearModal from "./ConfirmClearModal";

const ModalRoot = observer(() => {
    const { modalEmotionState } = modalEmotionStore;

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (modalEmotionState.type) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.paddingRight = '';
            document.body.style.overflowY = 'auto';
        }
    }, [modalEmotionState.type]);

    if (modalEmotionState.type === null) return null;

    switch (modalEmotionState.type) {
        case "addEmotion":
            return <AddEmotionModal />;
        case "confirmClear":
            return <ConfirmClearModal />;
        default:
            return null;
    }
});

export default ModalRoot;
