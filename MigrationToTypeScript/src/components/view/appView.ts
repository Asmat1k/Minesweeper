import { DataSources } from '../types';
import { IDataNews } from '../models/IDataNews';
import News from './news/news';
import Sources from './sources/sources';
import { IArticle } from '../models/IArticle';
import { ISource } from '../models/ISource';

export class AppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: IDataNews): void {
        const values: IArticle[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: DataSources): void {
        const values: ISource[] = data?.sources ? data?.sources : [];
        if (values) this.sources.draw(values);
    }
}

export default AppView;
