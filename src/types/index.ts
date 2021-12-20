import { ReactNode } from 'react';

export interface IInputProps {
  icon: string
  register: (string: string) => void;
  name: string;
  error: string;
  placeholder?: string;
  type?: string;
}

export interface IIsMine {
  isMine: Boolean
}

export interface IDataProps {
  person: IPerson;
}

export interface IPerson {
  nome: string;
  sobrenome: string;
  email: string;
  celular: string;
  local: string;
  cpf: string;
}

export interface IStyledButtonProps {
  onClick?: () => void;
  prop?: string;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IUserContextData {
  id: string;
  setUserId: (token: string) => void;
  setUserData: (resp: IUserData) => void;
  userData: IUserData;
}

export interface ICardRegisterProps {
  title: string;
  description: string;
}

export interface IPageTitleProps {
  title: string;
  subtitle: string;
}

export interface IFormRegisterProps {
  nome: string;
  sobrenome: string;
  email: string;
  password: string;
  cpf: string;
  cnh?: string;
  celular: string;
}

export interface IFormLoginProps {
  email: string;
  password: string;
}

export interface IStyledFilterButtonProps {
  icon: string;
  height: string;
  width: string;
  font: string;
  text: string;
  mark?: string;
}

export interface IUserData {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  created_at: string;
  cpf: string;
  celular: string;
  nota: number;
  cargas: [];
}

export interface IDriverProps {
  driver: {
    id: number,
    nome: string;
    sobrenome: string;
    email: string;
    celular: string;
    cpf: string;
    cnh: string;
    caminhoes: [
      {
        marca: string;
        modelo: string;
        capacidade_de_carga: number;
        placa: string;
      }
    ];
    nota: number;
  }
}