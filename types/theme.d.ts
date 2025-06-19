type TimeOfDay = "morning" | "day" | "evening" | "midnight" | "night";

interface TimeThemeConfig {
    label: TimeOfDay;
    range: [number, number];
    style: string;
}
