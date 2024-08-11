"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
node_fs_1.default.readFile("./src/fs/hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    else
        console.log(data);
});
node_fs_1.default.writeFileSync("./greet.txt", "Hello Prasad!!");
const data = node_fs_1.default.readFileSync("./greet.txt", "utf-8");
console.log(data);
