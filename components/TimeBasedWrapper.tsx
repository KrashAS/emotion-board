'use client';

import { getCurrentTheme } from '@/helpers/timeTheme';
import { ReactNode, useEffect, useState } from 'react';


type Props = {
    children: ReactNode;
};

const TimeBasedWrapper = ({ children }: Props) => {
    const [theme, setTheme] = useState(() => getCurrentTheme());

    useEffect(() => {
        function updateTheme() {
            setTheme(getCurrentTheme());
        }

        updateTheme();

        function msUntilNextThemeChange() {
            const hour = new Date().getHours();

            const changeHours = [0, 6, 12, 18, 22, 24];

            const nextChangeHour = changeHours.find(h => h > hour) ?? 24;

            const now = new Date();
            const nextChange = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                nextChangeHour,
                0,
                0,
                0
            );

            return nextChange.getTime() - now.getTime();
        }

        let timeout = setTimeout(function tick() {
            updateTheme();
            timeout = setTimeout(tick, msUntilNextThemeChange());
        }, msUntilNextThemeChange());

        return () => clearTimeout(timeout);
    }, []);

    return (
        <main className={`min-h-screen transition-colors duration-500 ${theme.style}`}>
            {children}
        </main>
    );
};

export default TimeBasedWrapper;
