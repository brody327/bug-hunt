//~~~~~~~~~~~~~~~~~~~
//~~~~ VARIABLES ~~~~
//~~~~~~~~~~~~~~~~~~~
export const getConfig = () => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	};

	return config;
};

export const getRank = (score) => {
	let rank = 'Recruit';
	if (score >= 20 && score < 60) {
		//rank Green Squasher
		rank = 'Green Squasher';
	} else if (score >= 60 && score < 120) {
		//rank Bug Hunter
		rank = 'Bug Hunter';
	} else if (score >= 120 && score < 360) {
		//rank Squasher Veteran
		rank = 'Squasher Veteran';
	} else if (score >= 360 && score < 1080) {
		//rank Hunter Prime
		rank = 'Hunter Prime';
	} else if (score >= 1080 && score < 3240) {
		//rank Bug's Bane
		rank = "Bug's Bane";
	} else if (score >= 3240) {
		//rank Project Defender
		rank = 'Project Defender';
	}

	return rank;
};

export const getBugReward = (severity) => {
	let reward = 0;
	if (severity === 'Minimal') {
		reward = 1;
	} else if (severity === 'Low') {
		reward = 2;
	} else if (severity === 'Medium') {
		reward = 3;
	} else if (severity === 'High') {
		reward = 4;
	} else if (severity === 'Severe') {
		reward = 5;
	}

	console.log(reward);
	return reward;
};
