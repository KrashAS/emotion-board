'use client';

import { emotionStore } from '@/stores/emotionStore';
import { modalStore } from '@/stores/modalStore';
import { enableStaticRendering } from 'mobx-react-lite';
import { ReactNode } from 'react';

enableStaticRendering(typeof window === 'undefined');

export const stores = {
    emotionStore,
    modalStore,
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {

    return <>{children}</>;
};
