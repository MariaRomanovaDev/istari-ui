import React from 'react';
import Select, { ISelectProp } from './Select';

interface IProps {
  percent: number;
  name: string;
  onChange: (o: ISelectProp) => void;
}

const percentageOpts = ((): ISelectProp[] => {
  const opts = [];
  for(let i=0; i<=100; i++) {
    opts.push({value: i, label: i});
  }
  return opts;
})();

const PercentSelect = ({ percent, name, onChange }: IProps): JSX.Element => {
  return <Select value={percentageOpts[percent]} name={name} options={percentageOpts} onChange={onChange} />
}

export default PercentSelect;