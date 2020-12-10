const getColor = (status) => {
    let color = 'blue';
    if (status === 'Partner')
        color = 'geekblue';

    if (status === 'Admin')
        color = 'green';

    return color;
}
export default getColor;