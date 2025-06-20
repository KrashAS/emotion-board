import { makeAutoObservable } from "mobx";

export class EmotionStore {
    emotions: EmotionRecord[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addEmotion(record: Omit<EmotionRecord, "id">) {
        const newEmotion: EmotionRecord = {
            id: Date.now().toString(),
            ...record,
        };
        this.emotions.unshift(newEmotion);
        this.save();
    }

    removeEmotion(id: string) {
        this.emotions = this.emotions.filter((e) => e.id !== id);
        this.save();
    }

    moveEmotion(fromIndex: number, toIndex: number) {
        const updated = [...this.emotions];
        const [moved] = updated.splice(fromIndex, 1);
        updated.splice(toIndex, 0, moved);
        this.emotions = updated;
        this.save();
    }

    save() {
        localStorage.setItem("emotion_records", JSON.stringify(this.emotions));
    }

    load() {
        const saved = localStorage.getItem("emotion_records");
        if (saved) {
            this.emotions = JSON.parse(saved);
        }
    }

    clear() {
        this.emotions = [];
        this.save();
    }
}

export const emotionStore = new EmotionStore();
