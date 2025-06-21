'use client';

import { useEmotionStore } from '@/hooks/useEmotionStore';
import { useIsMobile } from '@/hooks/useIsMobile';
import { observer } from 'mobx-react-lite';
import EmotionCard from './EmotionCard';

import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragStartEvent,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';

import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { useState } from 'react';
import EmotionEmpty from './EmotionEmpty';

const EmotionList = observer(() => {
    const emotionStore = useEmotionStore();
    const isMobile = useIsMobile();
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        if (!over || active.id === over.id) return;

        const oldIndex = emotionStore.emotions.findIndex(e => e.id === active.id);
        const newIndex = emotionStore.emotions.findIndex(e => e.id === over.id);

        const updated = arrayMove(emotionStore.emotions, oldIndex, newIndex);
        emotionStore.setEmotions(updated);
    };

    if (emotionStore.emotions.length === 0) {
        return (
            <EmotionEmpty />
        );
    }

    return (
        <section className="py-4">
            {isMobile ? (
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={emotionStore.emotions.map(e => e.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="flex flex-col gap-4">
                            {emotionStore.emotions.map(e => (
                                <EmotionCard
                                    key={e.id}
                                    {...e}
                                    isMobile
                                    isDragging={activeId === e.id}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {emotionStore.emotions.map(e => (
                        <EmotionCard key={e.id} {...e} isMobile={false} />
                    ))}
                </div>
            )}
        </section>
    );
});

export default EmotionList;
