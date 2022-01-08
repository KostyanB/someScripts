const renderStatTab = data => {
    const statisticTabList = document.querySelector('.statistic__tab_list');
    statisticTabList.textContent = '';

    const tabList = data.reduce((html, item) => {
        const { games, goals, passes, rate, total, season } = item;
        return ( html += `
            <li class="statistic__tab_item">
                <div class="statistic__tab_item-content">Сезон ${season}</div>
                <div class="statistic__tab_item-content">${games}</div>
                <div class="statistic__tab_item-content">${goals}</div>
                <div class="statistic__tab_item-content">${passes}</div>
                <div class="statistic__tab_item-content">${total}</div>
                <div class="statistic__tab_item-content">${rate.toFixed(2)}</div>
            </li>
        `)
    }, '');

    statisticTabList.innerHTML = tabList;
};
export default renderStatTab;