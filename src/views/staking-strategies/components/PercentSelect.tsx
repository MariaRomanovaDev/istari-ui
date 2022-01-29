import React from 'react';
import Select from '../../components/Select';

interface Props {
  percent: number;
  name: string;
  onChange: (o: ISelectPercent) => void;
}

export interface ISelectPercent {
  value: number;
  label: string;
}

const percentageOpts = ((): ISelectPercent[] => {
  const opts = [];
  for(let i=0; i<=100; i++) {
    opts.push({value: i, label: `${i} %`});
  }
  return opts;
})();

const PercentSelect: React.FC<Props> = ({ percent, name, onChange }: Props) => {
  return <Select value={percentageOpts[percent]} name={name} options={percentageOpts} onChange={onChange} />
}

export default PercentSelect;