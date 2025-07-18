'use strict';

const api_key = "4456c13a9692cb887dd21abf20fe11a0";

/**
 * 
 * @param {string} URL 
 * @param {Function} callback 
 */
export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

