'use strict';

let HOST = 'http://test.m.feiniu.com/';

export function request(url, method, body) {
        fetch(HOST + url, {
            method: method,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body,
        })
            .then((response) => {
                return response.json();
            })
}