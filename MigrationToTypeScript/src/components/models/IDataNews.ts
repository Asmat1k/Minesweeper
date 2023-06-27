import { IArticle } from './IArticle';

export interface IDataNews {
    readonly status: string;
    readonly totalResults: number;
    readonly articles: IArticle[];
}
