import { Box, Button } from '@mui/material';
import React from 'react';

import bellIcon from '../../public/assets/icons/Bell.png';
import infoIcon from '../../public/assets/icons/InfoCircle.png';
import downarrowIcon from '../../public/assets/icons/downarrow.png';
import profileImg from '../../public/assets/images/Avatar.png';
import Image from 'next/image';

const Header = () => {
  return (
    <Box
      sx={{
        mt: 5,
        display: 'flex',
        height: '100%',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',

        alignItems: 'center',
      }}
    >
      <Box sx={{ bgcolor: '#7B5AFF', color: 'white', p: 0.5 }}>Logo</Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          height: '100%',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            fontSize: '16px',
            background: '#7B5AFF',
            border: 'none',
            outline: 'none',
            color: 'white',
            borderRadius: '50px',
            padding: '7px 14px',
          }}
        >
          Feedback
        </button>
        <Image src={bellIcon} alt="bellIcon" />
        <Image src={infoIcon} alt="infoIcon" />
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            height: '100%',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',

            alignItems: 'center',
          }}
        >
          <Image src={profileImg} alt="infoIcon" />
          <Image src={downarrowIcon} alt="infoIcon" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
