import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {

  const { user, handleSignOut } = useAuth();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt='Logo da DIO' />
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {user.id ? (
            <>
            <UserPicture src='https://avatars.githubusercontent.com/u/83245432?v=4' />
            <a href='/#' onClick={handleSignOut}>Sair</a>
            </>
          ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
