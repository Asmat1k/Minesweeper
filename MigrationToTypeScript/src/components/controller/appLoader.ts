import { apiInfo } from '../enums/api';
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(apiInfo.url, {
            apiKey: apiInfo.apiKey,
        });
    }
}

export default AppLoader;
