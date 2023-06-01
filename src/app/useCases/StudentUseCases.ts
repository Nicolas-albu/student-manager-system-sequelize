import DeleteStudentUseCase from "../../domain/useCases/DeleteStudentUseCase";
import CreateStudentUseCase from "../../domain/useCases/CreateStudentUseCase";
import IStudentRepository from "../../domain/repositories/IStudentRepository";
import ListStudentsUseCase from "../../domain/useCases/ListStudentsUseCase";

import CreateStudentController from "../controllers/CreateStudentController";
import DeleteStudentController from "../controllers/DeleteStudentController";
import ListStudentsController from "../controllers/ListStudentsController";

import GetStudentsByNameUseCase from "../../domain/useCases/GetStudentsByNameUseCase";
import UpdateStudentUseCase from "../../domain/useCases/UpdateStudentUseCase";
import UpdateStudentController from "../controllers/UpdateStudentController";
import repositoryFactory from "../../infra/repositories/RepositoryFactory";
import GetStudentsUserCase from "../../domain/useCases/GetStudentUseCase";
import GetStudentController from "../controllers/GetStudentController";
import GetStudentsByNameController from "../controllers/GetStudentsByNameController";


abstract class AbstractStudentUseCases {
    private studentRepository: IStudentRepository;

    constructor() {
        this.studentRepository = repositoryFactory();
    }

    protected get listStudent() {
        return new ListStudentsUseCase(this.studentRepository);
    }

    protected get deleteStudent() {
        return new DeleteStudentUseCase(this.studentRepository);
    }

    protected get createStudent() {
        return new CreateStudentUseCase(this.studentRepository);
    }

    protected get updateStudent() {
        return new UpdateStudentUseCase(this.studentRepository);
    }

    protected get getStudent() {
        return new GetStudentsUserCase(this.studentRepository);
    }

    protected get getStudentsByName() {
        return new GetStudentsByNameUseCase(this.studentRepository);
    }
}


export default class StudentUseCases extends AbstractStudentUseCases {
    constructor() {
        super();
    }

    public get createStudentController() {
        return new CreateStudentController(super.createStudent);
    }

    public get deleteStudentController() {
        return new DeleteStudentController(super.deleteStudent);
    }

    public get listStudentController() {
        return new ListStudentsController(super.listStudent);
    }

    public get updateStudentController() {
        return new UpdateStudentController(super.updateStudent);
    }

    public get getStudentController() {
        return new GetStudentController(super.getStudent);
    }

    public get getStudentsByNameController() {
        return new GetStudentsByNameController(super.getStudentsByName);
    }
}