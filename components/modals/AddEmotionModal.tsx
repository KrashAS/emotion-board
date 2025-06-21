'use client';

import { MAX_COMMENT_LENGTH } from '@/constants/emotion';
import emotions from '@/data/emotions.json';
import { emotionStore } from '@/stores/emotionStore';
import { modalEmotionStore } from '@/stores/modalEmotionStore';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import IconClose from '../icons/IconClose';

const AddEmotionModal = observer(() => {
    const {
        modalEmotionState: { type, selectedEmotionId = null, comment = '' },
        setSelectedEmotion,
        setComment,
        close,
    } = modalEmotionStore;

    const [error, setError] = useState('');
    const [activeAnimation, setActiveAnimation] = useState<string | null>(null);

    const onClickIcon = (value: string) => {
        setSelectedEmotion(value);
        setActiveAnimation(value);
        setTimeout(() => setActiveAnimation(null), 400);
    }

    const handleSubmit = () => {
        if (!selectedEmotionId) {
            setError('Оберіть емоцію');
            return;
        }

        emotionStore.addEmotion({
            emotion_id: selectedEmotionId,
            comment,
        });

        close();
        setError('');
    };

    if (type !== 'addEmotion') return null;
    return (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50 px-3">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl w-full max-w-md relative shadow-lg">
                <button
                    onClick={close}
                    className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800 dark:hover:text-white cursor-pointer"
                >
                    <IconClose />
                </button>

                <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">Додати емоцію</h2>

                <div className="grid grid-cols-5 gap-2 mb-4">
                    {emotions.map(({ type, name, icon }) => (
                        <button
                            key={type}
                            onClick={() => onClickIcon(type)}
                            className={`p-2 rounded-xl border transition-transform duration-300 cursor-pointer ${selectedEmotionId === type
                                ? 'border-blue-500 bg-blue-100 dark:bg-blue-900'
                                : 'border-transparent'
                                } ${activeAnimation === type ? 'animate-zoom-up' : ''}`}
                        >
                            <span className="text-2xl">{icon}</span>
                            <div className="text-xs">{name}</div>
                        </button>
                    ))}
                </div>

                <textarea
                    className="w-full p-2 border border-zinc-300 rounded-lg mb-4 dark:bg-zinc-800 dark:text-white"
                    placeholder={`Короткий коментар (${MAX_COMMENT_LENGTH} символів)...`}
                    value={comment}
                    maxLength={MAX_COMMENT_LENGTH}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                />

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
                >
                    Додати
                </button>
            </div>
        </div>
    );
});

export default AddEmotionModal;
