import { TIME_THEME_CONFIGS } from "@/constants/timeTheme";

export function getCurrentTheme(): TimeThemeConfig {
    const hour = new Date().getHours();

    return (
        TIME_THEME_CONFIGS.find(
            ({ range }) => hour >= range[0] && hour <= range[1]
        ) || TIME_THEME_CONFIGS[0]
    );
}
