import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Data, DataSources } from '../types';
import { IDataNews } from '../models/IDataNews';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): never | void {
        const sources: Element | null = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: Data) => this.view.drawNews(data as IDataNews))
            );
        } else {
            throw new Error(".sources doesn't found");
        }
        this.controller.getSources((data: Data) => this.view.drawSources(data as DataSources));
    }
}

export default App;
