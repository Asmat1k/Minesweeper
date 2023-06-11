export type Data = DataSources | DataNews | undefined;
export type DataSources = { status: string; sources: Source } | undefined;
export type Endpoint = 'sources' | 'everything';
export type Source = Record<string, string>;
export type Article = Record<string, string> & { source: Record<string, string> };
export type DataNews = {
    status: string;
    totalResults: number;
    articles: Article[];
};
