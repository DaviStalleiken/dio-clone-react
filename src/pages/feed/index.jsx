import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={96} name="Davi Stalleiken" image='https://avatars.githubusercontent.com/u/83245432?v=4' />
                <UserInfo percentual={81} name="Davi Stalleiken" image='https://avatars.githubusercontent.com/u/83245432?v=4' />
                <UserInfo percentual={75} name="Davi Stalleiken" image='https://avatars.githubusercontent.com/u/83245432?v=4' />
                <UserInfo percentual={64} name="Davi Stalleiken" image='https://avatars.githubusercontent.com/u/83245432?v=4' />
                <UserInfo percentual={58} name="Davi Stalleiken" image='https://avatars.githubusercontent.com/u/83245432?v=4' />
            </Column>
           
        </Container>
    </>)
}

export { Feed }