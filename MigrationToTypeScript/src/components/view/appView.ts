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

    public drawNews(data: DataNews): void {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    // TODO! valuse: type ?
    public drawSources(data: DataSources): void {
        const values: Sources[] = data?.sources ? data?.sources : [];
        if (values) {
            this.sources.draw(values);
        }
    }
}

export default AppView;
