import env from '../env.json';

const renderStatTabHeader = ({sortColumn, directSort}) => {
    const menuList = env.lists.statMenu;

    let checkedSize = checkSize();
    function checkSize() {
        const width = document.documentElement.clientWidth;
        if (width <= 900) {
            return true;
        } else {
            return false;
        }
    };

    const createHeaderHtml = (list, check) => list.reduce((html, item, i) => {
        const activeSvg = (item[0] === sortColumn) ? 'color: #5A60E7;' : '';

        return (html += `
            <button class="statistic__tab_button" data-sorting="${item[0]}">
                ${(() => (
                    (i > 0) ?
                        `<div class="statistic__tab_sort">
                            <svg style="${directSort ? activeSvg : ''}">
                                <use xlink:href="img/icons.svg#sort-up"></use>
                            </svg>
                            <svg style="${!directSort ? activeSvg : ''}">
                                <use xlink:href="img/icons.svg#sort-down"></use>
                            </svg>
                        </div>` :
                        ''
                    ))()
                }
                ${check ? item[2] : item[1]}
            </button>
        `)
    }, '');


    const renderHeader = () => {
        const statisticTabHeader = document.querySelector('.statistic__tab_header');
        statisticTabHeader.innerHTML = createHeaderHtml(menuList, checkedSize);
    };
    renderHeader();

    window.addEventListener('resize', () =>{
        const size = checkSize();
        if (size !== checkedSize) {
            checkedSize = size;
            renderHeader();
        }
    });
};
export default renderStatTabHeader;