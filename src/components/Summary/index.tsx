import { Container } from "./style";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg  from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$12.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="income" />
        </header>
        <strong>- R$1100,00</strong>
      </div>
      <div className="hight-light-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="income" />
        </header>
        <strong>R$10.900,00</strong>
      </div>
    </Container>
  );
}