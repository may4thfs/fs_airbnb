import aRequest from ".."

export function getHomeGoodPriceData() {
	return aRequest.get({
		url: "/home/goodprice"
	})
}
