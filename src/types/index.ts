import React, { ReactNode } from 'react';

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