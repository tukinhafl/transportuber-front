import { Container } from "./styles";
import { MdEmail, MdLocationOn, MdPhone, MdCameraAlt } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { IDataProps } from "../../types";

export const Profile = ({ person }: IDataProps) => {
  return (
    <Container>
      <div className="photo">
        <img src="https://i.pravatar.cc/150" alt="Foto de perfil" />
        <span className="changePhoto">
          <MdCameraAlt />
        </span>
      </div>
      <div className="info">
        <h3>
          {person.nome}&nbsp;{person.sobrenome}
        </h3>
        <div className="line">
          <p className="first">
            <MdEmail />
            &nbsp;{person.email}
          </p>
          <p>
            <MdLocationOn />
            &nbsp;{person.local}
          </p>
        </div>
        <div className="line">
          <p className="first">
            <MdPhone />
            &nbsp;{person.celular}
          </p>
          <p>
            <FaIdCard />
            &nbsp;{person.cpf}
          </p>
        </div>
      </div>
    </Container>
  );
};
