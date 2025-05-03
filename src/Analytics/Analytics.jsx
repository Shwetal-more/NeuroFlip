import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Radar } from 'react-chartjs-2';
import './Analytics.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Analytics = () => {
  // Sample data for the last 8 weeks
  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];

  // Accuracy Data
  const accuracyData = {
    labels: weeks,
    datasets: [{
      label: 'Movement Accuracy (%)',
      data: [65, 68, 70, 72, 75, 78, 82, 85],
      borderColor: '#2196F3',
      backgroundColor: 'rgba(33, 150, 243, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  // Reaction Time Data
  const reactionTimeData = {
    labels: weeks,
    datasets: [{
      label: 'Reaction Time (ms)',
      data: [850, 800, 780, 750, 720, 690, 670, 650],
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  // Session Duration Data
  const sessionDurationData = {
    labels: weeks,
    datasets: [{
      label: 'Session Duration (minutes)',
      data: [20, 22, 25, 28, 30, 32, 35, 38],
      backgroundColor: 'rgba(156, 39, 176, 0.7)',
    }]
  };

  // Game Completion Data
  const gameCompletionData = {
    labels: weeks,
    datasets: [
      {
        label: 'Memory Games',
        data: [3, 4, 4, 5, 5, 6, 6, 7],
        backgroundColor: 'rgba(233, 30, 99, 0.6)',
      },
      {
        label: 'Motor Control Games',
        data: [2, 3, 3, 4, 4, 5, 5, 6],
        backgroundColor: 'rgba(103, 58, 183, 0.6)',
      },
      {
        label: 'Cognitive Games',
        data: [1, 2, 2, 3, 3, 4, 4, 5],
        backgroundColor: 'rgba(0, 150, 136, 0.6)',
      }
    ]
  };

  // Error Rate Data
  const errorRateData = {
    labels: weeks,
    datasets: [{
      type: 'line',
      label: 'Error Rate Trend',
      borderColor: '#FF5722',
      borderWidth: 2,
      data: [12, 10, 9, 8, 7, 6, 5, 4],
      tension: 0.4,
      yAxisID: 'y1'
    },
    {
      type: 'scatter',
      label: 'Individual Sessions',
      backgroundColor: 'rgba(255, 87, 34, 0.6)',
      data: [
        { x: 0, y: 13 }, { x: 0, y: 11 }, { x: 1, y: 11 }, { x: 1, y: 9 },
        { x: 2, y: 10 }, { x: 2, y: 8 }, { x: 3, y: 9 }, { x: 3, y: 7 },
        { x: 4, y: 8 }, { x: 4, y: 6 }, { x: 5, y: 7 }, { x: 5, y: 5 },
        { x: 6, y: 6 }, { x: 6, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 3 }
      ],
      yAxisID: 'y1'
    }]
  };

  // Movement Smoothness Data
  const movementSmoothnessData = {
    labels: ['Fine Motor Control', 'Movement Stability', 'Speed Consistency', 'Path Accuracy', 'Tremor Control', 'Movement Fluidity'],
    datasets: [
      {
        label: 'Week 1',
        data: [45, 40, 50, 42, 48, 43],
        backgroundColor: 'rgba(233, 30, 99, 0.2)',
        borderColor: 'rgba(233, 30, 99, 0.8)',
        fill: true
      },
      {
        label: 'Week 4',
        data: [60, 58, 65, 59, 62, 58],
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        borderColor: 'rgba(156, 39, 176, 0.8)',
        fill: true
      },
      {
        label: 'Week 8',
        data: [80, 75, 82, 78, 80, 77],
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderColor: 'rgba(76, 175, 80, 0.8)',
        fill: true
      }
    ]
  };

  // Cognitive Metrics Data
  const cognitiveMetricsData = {
    labels: ['Memory', 'Problem Solving', 'Focus', 'Pattern Recognition', 'Decision Making', 'Processing Speed'],
    datasets: [
      {
        label: 'Initial Assessment',
        data: [50, 45, 55, 48, 52, 47],
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        borderColor: 'rgba(33, 150, 243, 0.8)',
        fill: true
      },
      {
        label: 'Current Progress',
        data: [75, 70, 80, 72, 78, 73],
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        borderColor: 'rgba(76, 175, 80, 0.8)',
        fill: true
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Progress Metrics'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="analytics-container">
      <h1>Patient Progress Analytics</h1>
      
      <div className="metrics-overview">
        <div className="metric-card">
          <h3>Overall Progress</h3>
          <div className="progress-circle" style={{'--progress': '75%'}}>
            <span>75%</span>
          </div>
          <p>Based on combined metrics</p>
        </div>

        <div className="metric-card">
          <h3>Weekly Sessions</h3>
          <div className="progress-circle" style={{'--progress': '85%'}}>
            <span>85%</span>
          </div>
          <p>Attendance rate</p>
        </div>

        <div className="metric-card">
          <h3>Goal Achievement</h3>
          <div className="progress-circle" style={{'--progress': '70%'}}>
            <span>70%</span>
          </div>
          <p>Target completion rate</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3>Movement Accuracy Trend</h3>
          <Line data={accuracyData} options={chartOptions} />
        </div>

        <div className="chart-container">
          <h3>Reaction Time Progress</h3>
          <Line data={reactionTimeData} options={chartOptions} />
        </div>

        <div className="chart-container">
          <h3>Session Duration</h3>
          <Bar data={sessionDurationData} options={chartOptions} />
        </div>

        <div className="chart-container">
          <h3>Games Completed per Week</h3>
          <Bar data={gameCompletionData} options={chartOptions} />
        </div>

        <div className="chart-container">
          <h3>Error Rate Analysis</h3>
          <Line data={errorRateData} options={chartOptions} />
        </div>

        <div className="chart-container">
          <h3>Movement Smoothness Progress</h3>
          <Radar data={movementSmoothnessData} options={chartOptions} />
        </div>

        <div className="chart-container">
          <h3>Cognitive Performance Metrics</h3>
          <Radar data={cognitiveMetricsData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;