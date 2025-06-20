import EmotionList from '@/components/EmotionList';
import HeaderHome from '@/components/pages/home/HeaderHome';
import TimeBasedWrapper from '@/components/TimeBasedWrapper';

export default function HomePage() {
    return (
        <TimeBasedWrapper>
            <div className="max-w-4xl mx-auto p-4">
                <HeaderHome />
                <EmotionList />
            </div>
        </TimeBasedWrapper>
    );
}