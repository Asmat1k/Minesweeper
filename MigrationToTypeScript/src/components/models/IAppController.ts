import { Data } from '../types';

export interface IAppController {
    getSources(callback: (data?: Data) => void): void;
    getNews(e: Event, callback: (data?: Data) => void): void | undefined;
}
