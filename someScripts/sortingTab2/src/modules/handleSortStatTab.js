import renderStatTab from "./renderStatTab";

import handleSortParam from "./handleSortParam";

const handleSortStatTab = data => {

    const { setSortParam, toggleDirect, sortParam } = handleSortParam();

    // sorting by direct
    const handleSortingDirect = (column, arr) => {
        if (column === sortParam.sortColumn) {
            if (sortParam.directSort) {
                renderStatTab(arr.reverse());
            } else {
                renderStatTab(arr);
            }
            toggleDirect();
        } else {
            renderStatTab(arr);
            setSortParam(column);
        }
    };

    // sorting number
    const sortByNum = (param, arr) => arr.sort((x, y) => x[param] - y[param]);
    // sorting string
    const sortByStr = (param, arr) => arr.sort((x, y) => x[param].localeCompare(y[param], 'ru'));

    // create arr from selected column
    const createSortArr = (param, arr) => {
        if (param === 'season') {
            handleSortingDirect(param, sortByStr(param, arr));
        } else {
            handleSortingDirect(param, sortByNum(param, arr));
        }
    };


    document.addEventListener('click', e => {
        if (!e.target.closest('.statistic__tab_button')) {
            return; // клик не по кнопке меню
        } else {
            const sortColumn = e.target.dataset.sorting
            createSortArr(sortColumn, data);
        }
    });
};
export default handleSortStatTab;