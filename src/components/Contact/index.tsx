import { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

type TableDataProps = {
  label: string;
  value: string | ReactNode;
};

const TableData: FC<TableDataProps> = ({ label, value }) => (
  <Box sx={{ display: 'flex', padding: '.5em 0' }}>
    <Box sx={{ minWidth: '8em' }}>
      <strong>{label}:</strong>
    </Box>
    <Box>{value}</Box>
  </Box>
);

export const Contact = () => (
  <>
    <h1>Kontakt</h1>
    <Box sx={{ display: 'flex', marginTop: '1.5em' }}>
      <Box sx={{ width: '20%', ['@media (max-width:500px)']: { display: 'none' } }}>
        <Box sx={{ paddingRight: '2em' }}>
          <img
            src="https://cdn.baraja.cz/images/jan-barasek.jpg"
            alt="Jan Barášek"
            title="Jan Barášek - fotografie"
            style={{ width: '100%', borderRadius: '50%' }}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography sx={{ fontSize: '18pt', fontWeight: 'bold' }}>Jan&nbsp;Barášek</Typography>

        <Box sx={{ margin: '1em 0' }}>
          <TableData label="E-mail" value={<a href="mailto:jan@barasek.com">jan@barasek.com</a>} />
        </Box>

        <Typography sx={{ fontSize: '18pt', fontWeight: 'bold' }}>Fakturační údaje</Typography>
        <p>
          R.&nbsp;Novotného&nbsp;1505,
          <br />
          272&nbsp;01&nbsp;Kladno
        </p>
        <p>Adresa slouží pouze jako sídlo společnosti a&nbsp;pro fakturaci.</p>

        <Box sx={{ margin: '2em 0' }}>
          <TableData
            label="Číslo&nbsp;účtu"
            value={
              <>
                316527546/0300
                <br />
                1315311027/3030 (původní)
              </>
            }
          />
          <TableData label="Sazba" value={<>1&nbsp;250&nbsp;Kč&nbsp;/&nbsp;hodina bez DPH</>} />
          <TableData label="IČ" value={'05103118'} />
          <TableData label="DIČ" value={'CZ9609040727'} />
        </Box>

        <p>Podnikatel zapsaný v Živnostenském rejstříku. Prodejce je plátce DPH v České republice.</p>
      </Box>
    </Box>
  </>
);
