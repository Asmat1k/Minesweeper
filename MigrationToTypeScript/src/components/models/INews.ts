import { IArticle } from './IArticle';

export interface INews {
    draw(data: IArticle[]): void;
}
