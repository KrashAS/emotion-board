'use client';

import { emotionStore } from '@/stores/emotionStore';
import { modalEmotionStore } from '@/stores/modalEmotionStore';
import { enableStaticRendering } from 'mobx-react-lite';
import { ReactNode } from 'react';

enableStaticRendering(typeof window === 'undefined');

export const stores = {
    emotionStore,
    modalEmotionStore,
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {

    return <>{children}</>;
};
