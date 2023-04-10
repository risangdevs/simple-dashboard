import { ReactElement } from "react";
export type cardData = {
    label: string, value: number, icon: ReactElement
}

export type activity = {
    trend: "increase" | "decrease" | string,
    trendValue: string,
    data: activityData[]
}

export type activityData = {
    actor: string,
    object: string,
    action: string,
    at: string
}