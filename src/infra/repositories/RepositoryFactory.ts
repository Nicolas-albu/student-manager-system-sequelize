import SequelizeStudentRepository from "./SequelizeStudentRepository"

const repositoryFactory = () => {
    return new SequelizeStudentRepository();
}

export default repositoryFactory