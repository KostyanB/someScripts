
const getStatDb = async ({ url, options }) => {
    try {
        const responce = await fetch(url, options);
        const res = await responce.json();
        return res;
    } catch (err) {
        console.error(err);
    }

};
export default getStatDb;