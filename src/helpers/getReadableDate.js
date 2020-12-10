import { format } from 'date-fns';

const getReadableDate = (date) => {
    return format(new Date(date), "P");
}

export default getReadableDate;