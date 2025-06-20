'use client';

import { useEmotionStore } from "@/hooks/useEmotionStore";
import { observer } from "mobx-react-lite";
import EmotionCard from "./EmotionCard";

const EmotionList = observer(() => {
    const { emotions: userEmotions } = useEmotionStore();

    return (
        <section className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {userEmotions.map(emotion => (
                    <EmotionCard key={emotion.id} {...emotion} />
                ))}
            </div>
        </section>
    );
});

export default EmotionList;

