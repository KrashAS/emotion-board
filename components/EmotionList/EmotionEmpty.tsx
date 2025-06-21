import { modalEmotionStore } from '@/stores/modalEmotionStore'

const EmotionEmpty = () => {
    return (
        <section className="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-center text-center">
            <p className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-300">
                Поки що немає жодної емоції.
            </p>
            <button
                onClick={() => modalEmotionStore.open("addEmotion")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer font-semibold"
            >
                Додати першу емоцію
            </button>
        </section>
    )
}

export default EmotionEmpty