import { IArticle } from './IArticle';

export interface IDataNews {
    status: string;
    totalResults: number;
    articles: IArticle[];
}
