
const getData = async () => {
		const data = await fetch('db/db.json');
		if (data.ok) {
			return data.json();
		} else {
			throw new Error(`Данные не получены, ошибка ${data.status} ${data.statusText}`);
		}
	};

	const getGoods = callback => {
		getData()
			.then(data => {
				callback(data);
			})
			.catch(err => {
				console.error(err);
			});
	};

	getGoods(data => {
		console.log(data);
	});