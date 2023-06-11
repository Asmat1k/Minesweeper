import { Article, DataNews, DataSources } from '../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataNews): void {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    // valuse: type ?
    drawSources(data: DataSources): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
