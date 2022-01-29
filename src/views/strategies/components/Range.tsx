import React from 'react';
import { Range, getTrackBackground } from 'react-range';

interface IStyledRange {
  values: number[];
  onChange: (arr: number[]) => void;
}

const STEP = 1;
const MIN = 0;
const MAX = 6;

const StyledRange: React.FC<IStyledRange> = ({values, onChange}) => {

  return (
    <Range
      step={STEP}
      min={MIN}
      max={MAX}
      values={values}
      onChange={(currentValues): void => onChange(currentValues)}
      renderTrack={({ props, children }): JSX.Element => (
        <div
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          style={{
            ...props.style,
            height: '15px',
            width: '100%',
            borderRadius: '15px',
            background: getTrackBackground({
              values,
              colors: ['white', '#56acff', 'white'],
              min: MIN,
              max: MAX
            }),
          }}
        >
          {children}
        </div>
      )}
      renderMark={({ props, index }): JSX.Element => (
        <div
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          style={{
            ...props.style,
            height: '15px',
            width: '2px',
            marginTop: '0px',
            backgroundColor: (index === 0 || index === MAX) ?
              'transparent' : '#454444',
          }}
        />
      )}
      renderThumb={({ props }): JSX.Element => (
        <div
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          style={{
            ...props.style,
            height: '30px',
            width: '30px',
            borderRadius: '100%',
            backgroundColor: '#56acff',
            boxShadow: '3px 3px 15px 2px rgb(0 0 0 / 16%)',
          }}
        />
      )}
    />
  );
}

export default StyledRange;