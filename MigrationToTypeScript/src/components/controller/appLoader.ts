import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '23d6d0cc7eea4335aaaaae4f27aeafcd',
        });
    }
}

export default AppLoader;
