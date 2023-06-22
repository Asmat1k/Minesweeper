import './sources.css';
import { ISources } from '../../models/ISources';
import { ISource } from '../../models/ISource';

class Sources implements ISources {
    public draw(data: ISource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp) {
                const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
                const sourceItemName: Element = sourceClone.querySelector('.source__item-name') as Element;

                if (sourceItemName) {
                    sourceItemName.textContent = item.name;
                } else {
                    throw new Error(".source__item-name doesn't found ");
                }

                sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            } else {
                throw new Error("#sourceItemTemp doesn't found ");
            }
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
