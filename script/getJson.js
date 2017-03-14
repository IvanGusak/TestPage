import { renderHouse } from "./"

function httpGet(url) {

	return new Promise(function (resolve, reject) {

		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function () {
			if (this.status == 200) {
				resolve(JSON.parse(this.response));
			} else {
				var error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};

		xhr.onerror = function () {
			reject(new Error("Network Error"));
		};

		xhr.send();
	});

}

function httpPost(url, data) {
	//return new Promise(function (resolve, reject) {

		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onload = function () {
			if (this.status == 200) {
				//resolve(JSON.parse(xhr.responseText));
			} else {
				var error = new Error(this.statusText);
				error.code = this.status;
				//reject(error);
			}
		};

		xhr.onerror = function () {
			//reject(new Error("Network Error"));
		};

		xhr.send(data);
	//});
}

export { httpGet, httpPost };