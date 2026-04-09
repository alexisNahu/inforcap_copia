export const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[,."'“”]/g, '')
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-');
};
