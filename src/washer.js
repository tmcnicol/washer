export function parseJWTPayload(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
}


export function findDripLinks() {
	const urls = document.querySelectorAll('a');
	const dripUrls = [];
	for (const url of urls) {
		if (url.href.includes("dripemail")) {
			dripUrls.push(url);
		}
	}

	return dripUrls;
}

export function replaceDripUrl(url) {
	const href = url.href
	if (href.includes("dripemail")) {
		const token = href.split("/").pop();
		const target = parseJWTPayload(token)["url"];
		const baseURL = target.split("?")[0];
		if (!baseURL) {
			return
		}
		url.href = target
	}
}

export function findAndReplaceDripTargets(dripURLs) {
	for (url of dripURLs) {
		replaceDripUrl(url);
	}
}

