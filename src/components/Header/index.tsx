import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}