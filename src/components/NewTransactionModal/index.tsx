import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import CloseImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  function handleNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      type,
      amount,
      category,
      title
    };

    api.post('/transactions', data)
  }

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button 
      type='button'
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={CloseImg} alt="Fechar modal" />
    </button>

    <Container onSubmit={handleNewTransaction}>
      <h2>Cadastrar transação</h2>

      <input 
        placeholder="Título"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input 
        type="number"
        placeholder='Valor'
        value={amount}
        onChange={(event) => setAmount(+event.target.value)}
      />

      <TransactionTypeContainer>
        <RadioBox
          type='button'
          onClick={() => setType('deposit')}
          isActive={type === 'deposit'}
          activeColor='green'
        >
          <img src={incomeImg} alt="entrada" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
          type='button'
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor='red'
        >
          <img src={outcomeImg} alt="saída" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input 
        placeholder='Categoria'
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      <button type="submit">
        Cadastrar
      </button>

    </Container>
  </Modal>
  );
}