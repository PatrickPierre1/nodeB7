"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mat_1 = __importDefault(require("./mat"));
const validator_1 = __importDefault(require("validator"));
let n1 = 10;
let n2 = 2;
console.log(`Soma: ${mat_1.default.somar(n1, n2)}`);
console.log(`Subtração: ${mat_1.default.subtrair(n1, n2)}`);
console.log(`Multiplicação: ${mat_1.default.multiplicar(n1, n2)}`);
console.log(validator_1.default.isEmail('patrickpierre2015@gmail.com'));
