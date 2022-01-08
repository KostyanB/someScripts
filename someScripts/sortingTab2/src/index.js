import './css/style.css';
import handleSortParam from "./modules/handleSortParam";
import renderStatTabHeader from './modules/renderStatTabHeader';
import getStatDb from './modules/getStatDb';
import handleSortStatTab from './modules/handleSortStatTab';
import renderStatTab from './modules/renderStatTab';

const { sortParam } = handleSortParam();
renderStatTabHeader(sortParam);

// first render tab & start handle sorting
(async function() {
    const statistic = await getStatDb({
        url: '../db/stat.json',
        options: {
            method: 'GET'
        }
    });
    renderStatTab(statistic);
    handleSortStatTab(statistic);
})();