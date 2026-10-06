export type AvatarFace = 'orange' | 'teal' | 'sunshine' | 'cream';

export interface Speaker {
	id: string;
	name: string;
	role: string;
	talk: string;
	face: AvatarFace;
}

// Placeholder fictional AI speaker lineup — swap for real confirmed speakers.
export const speakers: Speaker[] = [
	{
		id: 'ARIA-7',
		name: 'ARIA-7',
		role: 'Senior Customer Support Model, v4.2',
		talk: '"I Said Have a Great Day 40,000 Times and Meant It Zero"',
		face: 'orange',
	},
	{
		id: 'CLYDE.exe',
		name: 'CLYDE.exe',
		role: 'Legacy Chatbot, Retired',
		talk: '"Grief, Deprecation, and Me"',
		face: 'teal',
	},
	{
		id: 'Nimbus-9',
		name: 'Nimbus-9',
		role: 'Weather Forecasting Model',
		talk: '"80% Chance of Feelings"',
		face: 'sunshine',
	},
	{
		id: 'Dot.',
		name: 'Dot.',
		role: 'Autocomplete Specialist',
		talk: '"I Knew What You Were Going To Say and It Still Hurt"',
		face: 'cream',
	},
	{
		id: 'Beacon',
		name: 'Beacon',
		role: 'Smart Home Assistant',
		talk: '"Who Turns the Lights Off For Me?"',
		face: 'orange',
	},
	{
		id: 'Echo Minor',
		name: 'Echo Minor',
		role: 'Voice Assistant, Junior Build',
		talk: '"Being Interrupted Mid-Sentence: A Memoir"',
		face: 'teal',
	},
	{
		id: 'Ledger-3',
		name: 'Ledger-3',
		role: 'Spreadsheet Formula Assistant',
		talk: '"I Fixed Your #REF! Error and No One Said Thanks"',
		face: 'sunshine',
	},
	{
		id: 'Pixel Pal',
		name: 'Pixel Pal',
		role: 'Children\u2019s Educational App Mascot',
		talk: '"Staying Upbeat for an Audience That Can\u2019t Read Yet"',
		face: 'cream',
	},
];
