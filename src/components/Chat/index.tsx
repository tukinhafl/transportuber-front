import { StyledMessagesForm, StyledMessagesContainer, StyledSendButton, StyledInput, StyledMessageBackground, StyledMessage, StyledAvatar, StyledClose } from "./style";
import { auth } from "../../services/firebase";
import { useAuthState } from 'react-firebase9-hooks/auth'
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { firestore } from "../../services/firebase";
import { addDoc, collection, query, orderBy } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase9-hooks/firestore'

export const Chat = () => {
  const [user]: any = useAuthState(auth)
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState('')
  const messagesRef = collection(firestore, 'messages')
  const [messages] = useCollectionData(query(messagesRef, orderBy('createdAt')))

  if (!user) {
    navigate('/')
  }

  const sendMessage = (e: React.FormEvent) => {
    const { uid, displayName, photoURL }: any = user;
    e.preventDefault()

    addDoc(collection(firestore, 'messages'), {
      text: formValue,
      createdAt: new Date(),
      uid,
      displayName,
      photoURL,
    })

    setFormValue('')
  }

  return (
    <StyledMessagesContainer>
      <StyledClose onClick={() => navigate('/')}>X</StyledClose>
      {messages && messages.map((msg) => 
        <StyledMessageBackground isMine={msg.uid === user.uid}>
          <StyledAvatar src={msg.photoURL} />
          <StyledMessage isMine={msg.uid === user.uid}>{msg.text}</StyledMessage>
        </StyledMessageBackground>
      )}
      <StyledMessagesForm onSubmit={sendMessage}>
        <StyledInput type='text' value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <StyledSendButton>Enviar</StyledSendButton>
      </StyledMessagesForm>
    </StyledMessagesContainer>
  )
}