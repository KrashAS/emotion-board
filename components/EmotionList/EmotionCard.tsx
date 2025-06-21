import emotions from '@/data/emotions.json';
import { useEmotionStore } from '@/hooks/useEmotionStore';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useRef, useState } from 'react';

type Props = EmotionRecord & {
    isMobile: boolean;
    isDragging?: boolean;
};

export default function EmotionCard({
    id,
    emotion_id,
    comment,
    isMobile,
    isDragging,
}: Props) {
    const emotionStore = useEmotionStore();
    const emotionData = emotions.find(e => e.type === emotion_id);
    const [isSwiped, setIsSwiped] = useState(false);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
    } = useSortable({ id });

    const style = isMobile
        ? {
            transform: CSS.Transform.toString(transform),
            transition: 'transform 150ms ease-in-out',
        }
        : undefined;

    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const touchEndX = useRef(0);
    const touchEndY = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
        touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;
        const deltaY = Math.abs(touchStartY.current - touchEndY.current);
        if (deltaX > 80 && deltaY < 20) {
            setIsSwiped(true);
            setTimeout(() => {
                emotionStore.removeEmotion(id);
            }, 300);
        }
    };

    if (!emotionData) return null;

    return (
        <div
            ref={isMobile ? setNodeRef : undefined}
            style={{
                ...style,
                touchAction: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                msTouchAction: 'none',
            }}
            {...(isMobile ? { ...attributes, ...listeners } : {})}
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchMove={isMobile ? handleTouchMove : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
            className={`rounded-xl p-4 shadow-md transition-all duration-150 ease-in-out
        ${isSwiped ? '-translate-x-full opacity-0' : ''}
        ${isDragging ? 'opacity-50 scale-95' : ''}
        ${emotionData.color}
        relative select-none`}
        >
            <div className="flex justify-between items-start">
                <div className="text-4xl">{emotionData.icon}</div>

                {!isMobile ? (
                    <button
                        onClick={() => emotionStore.removeEmotion(id)}
                        className="px-3 py-1 rounded-md bg-white/80 text-red-600 text-sm font-medium shadow hover:bg-white hover:scale-105 transition cursor-pointer"
                    >
                        Видалити
                    </button>
                ) : <div
                    className="absolute top-2 right-2 w-5 h-5 cursor-grab"
                    title="Перетягнути"
                >
                </div>}
            </div>

            <h3 className="text-xl font-semibold mt-2">{emotionData.name}</h3>
            <p className="mt-1 text-sm line-clamp-2">{comment}</p>
        </div>
    );
}
