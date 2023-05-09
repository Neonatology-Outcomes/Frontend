import React from 'react';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

function BundleSelector({ getVariant, getVariantStyle, handleSetSelectedBundle, selectedBundle }) {
  return (
    <Box component="div" display="flex" flexDirection="row" justifyContent="space-between">
      <Box component="div" flexDirection="column" xs={6} width="100%" />
      <Box component="div" flexDirection="column" xs={6} width="100%">
        <Box
          component="div"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          xs={12}
        >
          <Box component="div" flexDirection="column" xs={4}>
            <Box component="div" flexDirection="row" justifyContent="center">
              <Button
                variant={getVariant(selectedBundle === 'At Admission')}
                style={getVariantStyle(selectedBundle === 'At Admission')}
                onClick={handleSetSelectedBundle('At Admission')}
              >
                At Admission
              </Button>
            </Box>
          </Box>
          <Box component="div" flexDirection="column" xs={4}>
            <Box component="div" flexDirection="row" justifyContent="center">
              <Button
                variant={getVariant(selectedBundle === 'In NICU')}
                style={getVariantStyle(selectedBundle === 'In NICU')}
                onClick={handleSetSelectedBundle('In NICU')}
              >
                At NICU
              </Button>
            </Box>
          </Box>
          <Box component="div" flexDirection="column" xs={4}>
            <Box component="div" flexDirection="row" justifyContent="center">
              <Button
                variant={getVariant(selectedBundle === 'Post Discharge')}
                style={getVariantStyle(selectedBundle === 'Post Discharge')}
                onClick={handleSetSelectedBundle('Post Discharge')}
              >
                Post Discharge
              </Button>
            </Box>
          </Box>
          <Box component="div" flexDirection="column" xs={4} />
        </Box>
      </Box>
    </Box>
  );
}

BundleSelector.propTypes = {
  getVariant: PropTypes.func.isRequired,
  getVariantStyle: PropTypes.func.isRequired,
  handleSetSelectedBundle: PropTypes.func.isRequired,
  selectedBundle: PropTypes.string.isRequired,
};

export default BundleSelector;
