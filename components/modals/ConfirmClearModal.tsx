'use client';

import { emotionStore } from '@/stores/emotionStore';
import { modalStore } from '@/stores/modalStore';
import { observer } from 'mobx-react-lite';

const ConfirmClearModal = observer(() => {
    const { modalState, close } = modalStore;

    if (modalState.type !== 'confirmClear') return null;

    const handleConfirm = () => {
        emotionStore.setEmotions([]);
        close();
    };

    const handleCancel = () => {
        close();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-3">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl w-full max-w-md relative shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">Підтвердження</h2>
                <p className="mb-6 text-zinc-700 dark:text-zinc-300">
                    Ви впевнені, що хочете очистити всі емоції?
                </p>

                <div className="flex justify-between space-x-3">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-zinc-700 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-zinc-600 transition cursor-pointer"
                    >
                        Відмінити
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
                    >
                        Очистити всі
                    </button>
                </div>
            </div>
        </div>
    );
});

export default ConfirmClearModal;
