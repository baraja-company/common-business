import { BrjLogo } from '@brj/ui';
import { Box } from '@mui/system';

export const BusinessCard = () => (
  <Box sx={{ textAlign: 'center', margin: '8em auto', p: 2, width: '100%', maxWidth: '40em' }}>
    <BrjLogo height={64} />
    <Box sx={{ my: 3 }}>
      <h1>Inovace. Technologie. Odvaha.</h1>
    </Box>
    <Box sx={{ textAlign: 'left' }}>
      <p style={{ lineHeight: 2 }}>
        BRJ je&nbsp;digitální organizace zaměřená na dodávku špičkového software. Zapojené projekty a&nbsp;společnosti
        dodávají inovativní služby postavené na moderních technologiích. Buďte při vývoji odvážní, budujte
        a&nbsp;překročte vaše včerejší možnosti.
      </p>
    </Box>
  </Box>
);
