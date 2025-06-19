type TimeOfDay = "morning" | "day" | "evening" | "night";

interface TimeThemeConfig {
    label: TimeOfDay;
    range: [number, number];
    style: string;
}
