import { IDataNews } from './models/IDataNews';
import { ISource } from './models/ISource';

export type Data = DataSources | IDataNews;
export type DataSources = { status: string; sources: ISource[] } | undefined;
export type Endpoint = 'sources' | 'everything';
export type Rec = Record<string, string>;
