export interface Theme {
  font: {
    family: string;
    size: string;
  },
  colors: {
    darkGray: string;
    gray: string;
    lightGray: string;
    shadedGray: string;
    darkGreen: string;
    shadedGreen: string;
    lightGreen: string;
    green: string;
  }
}

const theme: Theme = {
  font: {
    family: 'Krub, sans-serif',
    size: '16px',
  },
  colors: {
    darkGray: '#333333',
    gray: '#454444',
    lightGray: '#707070',
    shadedGray: '#666666',
    darkGreen: '#5b9762',
    shadedGreen: '#79df85',
    lightGreen: '#86fe94',
    green: '#83ff8c',
  }
};

export default theme;
