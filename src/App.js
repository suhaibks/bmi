import React from 'react';
import BMICalculator from './BMICalculator';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="h1">
      <h1>BMI Calculator</h1>
      <BMICalculator />
      <div className="bmi-info-container">
      <h2>Everything You Need to Know About BMI Calculation</h2>
      
      <h3>What is BMI?</h3>
      <p>
        BMI (Body Mass Index) is a numerical value derived from a person's weight and height. It is used to categorize individuals into weight status groups such as underweight, normal weight, overweight, or obese.
      </p>
      
      <h3>Formula for BMI Calculation</h3>
      <p><strong>Metric System:</strong> BMI = Weight (kg) / Height (m)<sup>2</sup></p>
      <p><strong>Imperial System:</strong> BMI = (Weight (lbs) × 703) / Height (inches)<sup>2</sup></p>
      
      <h3>BMI Categories</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>BMI Range</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Underweight</td><td>Below 18.5</td></tr>
          <tr><td>Normal weight</td><td>18.5 – 24.9</td></tr>
          <tr><td>Overweight</td><td>25 – 29.9</td></tr>
          <tr><td>Obese (Class 1)</td><td>30 – 34.9</td></tr>
          <tr><td>Obese (Class 2)</td><td>35 – 39.9</td></tr>
          <tr><td>Morbidly Obese</td><td>40 and above</td></tr>
        </tbody>
      </table>
      
      <h3>Why is BMI Important?</h3>
      <ul>
        <li>Helps assess weight-related health risks.</li>
        <li>Used by doctors and fitness professionals for general health screening.</li>
        <li>Identifies risks for conditions like heart disease, diabetes, and hypertension.</li>
      </ul>
      
      <h3>Limitations of BMI</h3>
      <ul>
        <li>Does not differentiate between fat and muscle mass.</li>
        <li>May not be accurate for athletes, bodybuilders, or elderly individuals.</li>
        <li>Does not consider fat distribution (e.g., belly fat vs. overall fat).</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>
        BMI is a simple and useful tool for identifying potential weight concerns but should be interpreted alongside other health indicators like body fat percentage, waist circumference, and overall lifestyle factors.
      </p>
    </div>
      <Footer />
    </div>
  );
}

export default App;