
export const formatDate = (dateString: Date) => {
    const date = new Date(dateString || "");
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};