import { Chance } from "chance";
import quotesInfo from "../data/quotes.json";


const chance = new Chance();
const { quotes } = quotesInfo;

export const getRandomInt = () => {
    return chance.integer({ min: 0, max: quotes.length - 1 });
};
