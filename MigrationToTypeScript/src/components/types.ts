export type DataSources = { status: string; sources: Source } | undefined;
export type Endpoint = 'sources' | 'everything';
type Source = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};
