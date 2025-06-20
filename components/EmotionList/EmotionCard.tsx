import emotions from '@/data/emotions.json';

const EmotionCard = ({ id, emotion_id, comment }: EmotionRecord) => {
    const emotionData = emotions.find(e => e.type === emotion_id);
    if (!emotionData) return null;

    return (
        <div
            key={id}
            className={`rounded-xl p-4 shadow-md ${emotionData.color} transition-all`}
        >
            <div className="text-4xl">{emotionData.icon}</div>
            <h3 className="text-xl font-semibold mt-2">{emotionData.name}</h3>
            <p className="mt-1 text-sm line-clamp-2">{comment}</p>
        </div>
    );
};

export default EmotionCard