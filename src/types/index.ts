import { ReactNode } from 'react';
import { string } from 'yup/lib/locale';

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
  setId: (token: string) => void;
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