"use client";

import { emotionStore } from "@/stores/emotionStore";
import { useEffect } from "react";

export function useEmotionStore() {
    useEffect(() => {
        emotionStore.load();
    }, []);

    return emotionStore;
}
