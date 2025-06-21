'use client';

import { useEmotionStore } from "@/hooks/useEmotionStore";
import { useIsMobile } from "@/hooks/useIsMobile";
import { modalEmotionStore } from "@/stores/modalEmotionStore";
import { observer } from "mobx-react-lite";

const HeaderHome = observer(() => {
    const emotionStore = useEmotionStore();
    const isMobile = useIsMobile();

    const clearAll = () => {
        modalEmotionStore.open('confirmClear');
    };

    const hasEmotions = emotionStore.emotions.length > 0;

    const ButtonGroup = () => (
        <div className="flex space-x-3 justify-between mt-4 md:mt-0">
            <button
                onClick={() => modalEmotionStore.open("addEmotion")}
                className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer transition"
            >
                Додати емоцію
            </button>

            <button
                onClick={clearAll}
                disabled={!hasEmotions}
                className="px-4 py-2 rounded-lg font-semibold transition bg-red-500 cursor-pointer text-white hover:bg-red-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
                Очистити всі
            </button>
        </div>
    );

    return (
        <header className="mb-6">
            <div className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
                <h1 className="text-3xl font-bold">Дошка емоцій</h1>
                {!isMobile && <ButtonGroup />}
            </div>

            {isMobile && <ButtonGroup />}
        </header>
    );
});

export default HeaderHome;
