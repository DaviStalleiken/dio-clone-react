import React from 'react'

import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer,
         Content,
         HasInfo,
         ImageBackground,
         PostInfo,
         UserInfo,
         UserPicture 
} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-random-energy-wave-background-image_307670.jpg' />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/83245432?v=4' />
                <div>
                    <h4>Davi Stalleiken</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito no curso de React no Bootcamp DIO do global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#REACT #JAVASCRIPT</h4>
                <p>
                    <FiThumbsUp /> 4
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
