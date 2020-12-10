import { format } from 'date-fns';

const getReadableDate = (date) => {
    return format(new Date(date), "P H:m:s");
}

export default getReadableDate;