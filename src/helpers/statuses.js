const statuses = [
    {
        name: 'Все',
        type: 'all'
    },
    {
        name: 'Клиент',
        type: 'Client'
    },
    {
        name: 'Партнер',
        type: 'Partner'
    },
    {
        name: 'Админ',
        type: 'Admin'
    }
];

export const getStatuses = () => {
    return statuses.filter((_, index) => index !== 0);
};

export default statuses;