// src/components/filters/FilterComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../redux/slices/campersSlice';
import FiltersForm from '../components/filters/FiltersForm';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters); 

  const [location, setLocation] = useState(filters.location || '');
  const [vehicleType, setVehicleType] = useState(filters.vehicleType || '');
  const [features, setFeatures] = useState(filters.features || []);

  // Filtre değişikliklerini Redux'a kaydet
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleVehicleTypeChange = (e) => setVehicleType(e.target.value);
  const handleFeatureChange = (e) => {
    const value = e.target.value;
    setFeatures((prevFeatures) =>
      prevFeatures.includes(value)
        ? prevFeatures.filter((feature) => feature !== value)
        : [...prevFeatures, value]
    );
  };

  const handleReset = () => {
    setLocation('');
    setVehicleType('');
    setFeatures([]);
  };

  const handleFilterSubmit = () => {
    const filterData = {
      location,
      vehicleType,
      features,
    };

    dispatch(fetchCampers(filterData));
  };

  return (
    <FiltersForm
      location={location}
      vehicleType={vehicleType}
      features={features}
      onLocationChange={handleLocationChange}
      onVehicleTypeChange={handleVehicleTypeChange}
      onFeatureChange={handleFeatureChange}
      onReset={handleReset}
      onSubmit={handleFilterSubmit}
    />
  );
};

export default Filter;
