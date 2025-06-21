"use client"
import { modalStore } from "@/stores/modalStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import AddEmotionModal from "./AddEmotionModal";
import ConfirmClearModal from "./ConfirmClearModal";

const ModalRoot = observer(() => {
    const { modalState } = modalStore;

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (modalState.type) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.paddingRight = '';
            document.body.style.overflowY = 'auto';
        }
    }, [modalState.type]);

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
