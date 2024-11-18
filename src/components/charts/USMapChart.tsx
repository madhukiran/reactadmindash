import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// GeoJSON URL for US States
const geoUrl =
  'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json';

const USMapChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ComposableMap projection="geoAlbersUsa" style={{ width: '100%', height: '100%' }}>
        <Geographies geography={geoUrl}>
          {({ geographies }: {geographies: any[]}) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: '#D6D6DA', outline: '#FFFFFF' },
                  hover: { fill: '#E53', outline: '#FFFFFF' },
                  pressed: { fill: '#E42', outline: '#FFFFFF' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default USMapChart;
