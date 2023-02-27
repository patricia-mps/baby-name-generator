interface Props {
  color?: 'blue' | 'pink' | 'green';
  dataTesteId?: string;
  disabled?: boolean;
  text: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default Props;
