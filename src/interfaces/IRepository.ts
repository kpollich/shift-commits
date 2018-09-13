import ICommit from "./ICommit";

interface IRepository {
  commits: ICommit[];
  name: string;
}

export default IRepository;
