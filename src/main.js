import {findDripLinks, findAndReplaceDripTargets} from './washer';


const MAX_RUNS = 10;
const timer = setInterval(run, 1000);
let numRuns = 0;

function run() {
	const dripURLS = findDripLinks();
	console.log("replacing urls:", dripURLS)
	if (dripURLS.length) {
		findAndReplaceDripTargets(dripURLS);
		numRuns += MAX_RUNS;
	}
	numRuns += 1;

	if (numRuns >= MAX_RUNS) {
		clearInterval(timer);
	}
}
