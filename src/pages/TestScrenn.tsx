import DefaultBackground from "../components/DefaultBackground/DefaultBackground"
import Input from "../components/Input"

const TestScreen = () => {


    return(
        <DefaultBackground>
            <Input icon="fas fa-user-circle" register={() => null} name="Name" error='Erro' placeholder='Digite seu nome' />
        </DefaultBackground>
    )

}
export default TestScreen