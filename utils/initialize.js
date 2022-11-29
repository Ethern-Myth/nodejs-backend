const mysql = require("mysql2/promise");
const config = require("../config/config");
const { database, host, port, user, password } = config;

async function initialize() {
	const connection = await mysql.createConnection({
		host,
		port,
		user,
		password,
	});
	await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);
}

module.exports = initialize;
