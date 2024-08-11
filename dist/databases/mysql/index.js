"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const createConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create a connection to the database
        const connection = yield promise_1.default.createConnection({
            host: '127.0.0.1',
            user: 'root',
            database: "shakila",
            password: "@admin123"
        });
        console.log('Connected to the MySQL database');
        // Perform a simple query
        const [rows, fields] = yield connection.execute('SELECT * FROM actor');
        console.log('Query results:', rows);
        // Close the connection
        yield connection.end();
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
    }
});
createConnection();
