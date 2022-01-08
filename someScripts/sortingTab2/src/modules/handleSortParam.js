import renderStatTabHeader from './renderStatTabHeader';

const handleSortParam = () => {
    const sortParam = {
        sortColumn: '',
        directSort: true
    };

    const setSortParam = column => {
        sortParam.sortColumn = column;
        sortParam.directSort = true;
        renderStatTabHeader(sortParam);

    };

    const toggleDirect = () => {
        sortParam.directSort = !sortParam.directSort;
        renderStatTabHeader(sortParam);
    };

    return {
        sortParam,
        setSortParam,
        toggleDirect,
    }
};
export default handleSortParam;

