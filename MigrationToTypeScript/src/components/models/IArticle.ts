export interface IArticle {
    readonly author: string;
    readonly content: string;
    readonly description: string;
    readonly publishedAt: string;
    readonly source: {
        readonly id: string;
        readonly name: string;
    };
    readonly title: string;
    readonly url: string;
    readonly urlToImage: string;
}
