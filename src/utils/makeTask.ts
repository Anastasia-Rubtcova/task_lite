export function makeTask(title: string) {
    return {
        id: Math.random().toString(36).slice(2, 9),
        title: title,
        createdAt: new Date(),
        completed: false,
    };
}