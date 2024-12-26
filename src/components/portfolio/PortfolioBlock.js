import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, appStore, playStore, title } = props;
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box style={{ width: '50%' }} component={'img'} src={image} alt={'mockup'} />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        {appStore && (
          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={appStore} title={'App Store'} icon={'fa fa-apple'} />
          </Box>
        )}
        {playStore && (
          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={playStore} title={'Play Store'} icon={'fa fa-play'} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;

