import Server from '../Server';
import Worker from '../contracts/Worker';
import Configurable from '../configurable';
import QuestionResults from '../wrappers/QuestionResults';
import QuestionDetail from '../wrappers/QuestionDetail';

class AuthWorker implements Worker {
    constructor(server: Configurable.ServerInformation = Server.US) {

    }

    async findQuestion(question: string): Promise<any> {

    }

    async findQuestionHighlight(question: string, category: number): Promise<QuestionResults> {
        return new QuestionResults();
    }

    async findQuestionById(id: string): Promise<QuestionDetail> {
        return new QuestionDetail();
    }

    async signin(email: string, password: string) {

    }

    async signup(email: string, password: string, country: string, birthday: string) {

    }
}

export default AuthWorker;