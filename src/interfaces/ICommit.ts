import IAuthor from "./IAuthor";

interface ICommit {
  message: string;
  url: string;
  author: IAuthor;
}

export default ICommit;
