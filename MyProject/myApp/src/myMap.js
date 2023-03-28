import React from 'react';
import { View } from 'react-native';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMap = withScriptjs(withGoogleMap((props) => {
  const { latitude, longitude } = props;
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: latitude, lng: longitude }}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
}));

const MyMapComponent = (props) => {
  const { latitude, longitude } = props;

  return (
    <View style={{ height: '400px', width: '100%' }}>
      <MyMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{padding: '18px' , marginTop: '30px', alignSelf: 'center', width:'400px', height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        latitude={latitude}
        longitude={longitude}
      />
    </View>
  );
};

export default MyMapComponent;
