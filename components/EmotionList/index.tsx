'use client';


const mockEmotions = [
    {
        id: '1',
        type: 'Радість',
        comment: 'Сонце світить!',
        color: 'bg-yellow-300 text-black',
        icon: '😊',
    },
    {
        id: '2',
        type: 'Смуток',
        comment: 'День був важким...',
        color: 'bg-blue-300 text-black',
        icon: '😢',
    },
    {
        id: '3',
        type: 'Злість',
        comment: 'Все дратує!',
        color: 'bg-red-400 text-white',
        icon: '😠',
    },
    {
        id: '4',
        type: 'Подив',
        comment: 'Неочікуваний поворот!',
        color: 'bg-purple-300 text-black',
        icon: '😲',
    },
    {
        id: '5',
        type: 'Спокій',
        comment: 'Нарешті тиша і чай 🍵',
        color: 'bg-green-200 text-black',
        icon: '😌',
    },
    {
        id: '6',
        type: 'Вина',
        comment: 'Забув подзвонити мамі 😔',
        color: 'bg-gray-400 text-white',
        icon: '😔',
    },
    {
        id: '7',
        type: 'Захоплення',
        comment: 'Дивився класний фільм!',
        color: 'bg-pink-300 text-black',
        icon: '🤩',
    },
    {
        id: '8',
        type: 'Страх',
        comment: 'Було страшно вночі 😱',
        color: 'bg-indigo-700 text-white',
        icon: '😱',
    },
    {
        id: '9',
        type: 'Нудьга',
        comment: 'Нічого не хочеться робити...',
        color: 'bg-gray-300 text-black',
        icon: '🥱',
    },
    {
        id: '10',
        type: 'Надія',
        comment: 'Все буде добре 🙏',
        color: 'bg-emerald-300 text-black',
        icon: '🙏',
    },
];

const EmotionList = () => {
    /* const [emotions, setEmotions] = useState(mockEmotions); */

    return (
        <section className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mockEmotions.map(({ id, type, comment, color, icon }) => (
                    <div
                        key={id}
                        className={`rounded-xl p-4 shadow-md ${color} transition-all`}
                    >
                        <div className="text-4xl">{icon}</div>
                        <h3 className="text-xl font-semibold mt-2">{type}</h3>
                        <p className="mt-1 text-sm">{comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EmotionList;
