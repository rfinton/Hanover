const generateEfcid = () => {
	return 'FUEL-SR' + Math.floor(Math.random() * (999999 - 100000) + 100000);
};