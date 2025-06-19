import EmotionList from '@/components/EmotionList';
import TimeBasedWrapper from '@/components/TimeBasedWrapper';

export default function HomePage() {
    return (
        <TimeBasedWrapper>
            <div className="max-w-4xl mx-auto p-4">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Дошка емоцій</h1>
                    <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Додати емоцію
                    </button>
                </header>

                <EmotionList />
            </div>
        </TimeBasedWrapper>
    );
}