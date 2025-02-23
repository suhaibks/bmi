import React, { useState } from 'react';
import './App.css';

const BMICalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState('');

  const toggleUnit = () => {
    setUnit(prevUnit => prevUnit === 'metric' ? 'imperial' : 'metric');
    setWeight('');
    setHeight('');
    setBMI(null);
    setError('');
  };

  const handleCalculate = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      setError('Please enter valid weight and height');
      setBMI(null);
      return;
    }

    setError('');
    let calculatedBMI;
    
    if (unit === 'metric') {
      calculatedBMI = weight / ((height / 100) ** 2);
    } else {
      calculatedBMI = (weight * 703) / (height ** 2);
    }
    
    setBMI(calculatedBMI.toFixed(1));
  };

  const handleClear = () => {
    setAge('');
    setWeight('');
    setHeight('');
    setBMI(null);
    setError('');
  };

  const getBMIClassification = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue < 24.9) return 'Normal weight';
    if (bmiValue < 29.9) return 'Overweight';
    return 'Obese';
  };

  const getClassificationRange = (bmiValue) => {
    if (bmiValue < 18.5) return '<18.5';
    if (bmiValue < 24.9) return '18.5 - 24.9';
    if (bmiValue < 29.9) return '25 - 29.9';
    return '30+';
  };

  const getSuggestedWeight = () => {
    if (!height || height <= 0) return 'N/A';
    
    if (unit === 'metric') {
      const minWeight = 18.5 * ((height / 100) ** 2);
      const maxWeight = 24.9 * ((height / 100) ** 2);
      return `${minWeight.toFixed(1)}kg - ${maxWeight.toFixed(1)}kg`;
    } else {
      const minWeight = (18.5 * (height ** 2)) / 703;
      const maxWeight = (24.9 * (height ** 2)) / 703;
      return `${minWeight.toFixed(1)}lbs - ${maxWeight.toFixed(1)}lbs`;
    }
  };

  return (
    <div className="bmi-calculator">

      <div className="input-group">
        <label>
          Age (years):
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Weight ({unit === 'metric' ? 'kg' : 'lbs'}):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={`Enter weight in ${unit === 'metric' ? 'kilograms' : 'pounds'}`}
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Height ({unit === 'metric' ? 'cm' : 'in'}):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={`Enter height in ${unit === 'metric' ? 'centimeters' : 'inches'}`}
          />
        </label>
      </div>
      <div className="unit-toggle">
        <button onClick={toggleUnit}>
          Switch to {unit === 'metric' ? 'Imperial' : 'Metric'} Units
        </button>
      </div>

      <div className="button-group">
        <button className="calculate-btn" onClick={handleCalculate}>
          Calculate BMI
        </button>
        {(bmi || error) && (
          <button className="clear-btn" onClick={handleClear}>
            Clear Entries
          </button>
        )}
      </div>

      {error && <div className="error">{error}</div>}

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <div className={`classification ${getBMIClassification(bmi).toLowerCase().replace(' ', '-')}`}>
            {getBMIClassification(bmi)} ({getClassificationRange(bmi)})
          </div>

          <div className="suggested-weight">
            <h3>Healthy Weight Range</h3>
            <p>{getSuggestedWeight()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;