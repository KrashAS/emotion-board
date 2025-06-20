'use client';

import { MAX_COMMENT_LENGTH } from '@/constants/emotion';
import emotions from '@/data/emotions.json';
import { emotionStore } from '@/stores/emotionStore';
import { modalStore } from '@/stores/modalStore';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import IconClose from '../icons/IconClose';

const EmotionModal = observer(() => {
    const { isOpen, selectedEmotionId, comment, close, setEmotion, setComment } = modalStore;
    const [error, setError] = useState('');

    if (!isOpen) return null;

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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-3">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl w-full max-w-md relative shadow-lg">
                <button
                    onClick={close}
                    className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800 dark:hover:text-white"
                >
                    <IconClose />
                </button>

                <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">Додати емоцію</h2>

                <div className="grid grid-cols-5 gap-2 mb-4">
                    {emotions.map(({ type, name, icon }) => (
                        <button
                            key={type}
                            onClick={() => setEmotion(type)}
                            className={`p-2 rounded-xl border ${selectedEmotionId === type
                                ? 'border-blue-500 bg-blue-100 dark:bg-blue-900'
                                : 'border-transparent'
                                }`}
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
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Додати
                </button>
            </div>
        </div>
    );
});

export default EmotionModal;
