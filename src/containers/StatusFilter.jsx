import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusFilter as StatusFilterBase } from '../components';
import { setFilterBy } from '../redux/actions/Filter';
import { getFilterBy } from '../redux/selectors/Filter';

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

const StatusFilter = () => {

    const { filterBy } = useSelector((state) => ({
        filterBy: getFilterBy(state)
    }));
    const dispatch = useDispatch();

    const filterRef = useRef();
    const [visable, setVisable] = useState(false);

    const onTogglePopup = useCallback(() => {
        setVisable(!visable);
    }, [visable]);

    const onSetFilterBy = useCallback((filterBy) => {
        dispatch(setFilterBy(filterBy));
        setVisable(false);
    }, [filterBy]);

    const filterOutsideClickListener = useCallback((e) => {
        if (!e.path.includes(filterRef.current)) {
            setVisable(false);
        }
    }, []);

    useEffect(() => {
        document.body.addEventListener('click', filterOutsideClickListener);
        return () => document.body.removeEventListener('click', filterOutsideClickListener);;
    }, [filterOutsideClickListener]);

    return <StatusFilterBase
        visable={visable}
        togglePopup={onTogglePopup}
        sortItems={statuses}
        setFilterBy={onSetFilterBy}
        filterBy={filterBy}
        filterRef={filterRef}
    />
}

export default StatusFilter;