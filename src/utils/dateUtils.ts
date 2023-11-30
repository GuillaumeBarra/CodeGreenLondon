import { CGLEvent } from "@/api/notion";

export const formatDate = (date: string) => {
    const inputDate = new Date(date);

    const day = inputDate.getDate()
    const month = inputDate.getMonth() + 1
    const year = inputDate.getFullYear()

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
}

export const sortEvents = (events: CGLEvent[]): CGLEvent[] => {
    const sortedEvents = events.sort((eventA,eventB) => {
        const dateA: Date = new Date(eventA.date);
        const dateB: Date = new Date(eventB.date);
        return dateA.getTime() - dateB.getTime()
    })

    return sortedEvents.reverse();
}

export const getPastEvents = (events: CGLEvent[]): CGLEvent[]=> {
    const currentDate = new Date()
    const pastEvents = events.filter(event => new Date(event.date) < currentDate)
    return pastEvents;
}

export const getUpcomingEvents = (events: CGLEvent[]): CGLEvent[]=> {
    const currentDate = new Date()
    const pastEvents = events.filter(event => new Date(event.date) > currentDate)
    return pastEvents;
}
