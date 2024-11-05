import React, { useState, useEffect } from 'react';

const WellBeing = () => {
  const [activityCounts, setActivityCounts] = useState({
    skippedCount: 0,
    studyHours: 0,
    exerciseCount: 0,
    screenTimeReduction: 0,
  });

  useEffect(() => {
    const savedCounts = JSON.parse(localStorage.getItem('activityCounts'));
    if (savedCounts) {
      setActivityCounts(savedCounts);
    }
  }, []);

  const handleSkipVideo = () => {
    const newCounts = { ...activityCounts, skippedCount: activityCounts.skippedCount + 1 };
    setActivityCounts(newCounts);
    localStorage.setItem('activityCounts', JSON.stringify(newCounts));
  };

  const handleStudySession = () => {
    const newCounts = { ...activityCounts, studyHours: activityCounts.studyHours + 1 };
    setActivityCounts(newCounts);
    localStorage.setItem('activityCounts', JSON.stringify(newCounts));
  };

  const handleExerciseSession = () => {
    const newCounts = { ...activityCounts, exerciseCount: activityCounts.exerciseCount + 1 };
    setActivityCounts(newCounts);
    localStorage.setItem('activityCounts', JSON.stringify(newCounts));
  };

  const handleScreenTimeReduction = () => {
    const newCounts = { ...activityCounts, screenTimeReduction: activityCounts.screenTimeReduction + 1 };
    setActivityCounts(newCounts);
    localStorage.setItem('activityCounts', JSON.stringify(newCounts));
  };

  const resetCounts = () => {
    const resetCounts = {
      skippedCount: 0,
      studyHours: 0,
      exerciseCount: 0,
      screenTimeReduction: 0,
    };
    setActivityCounts(resetCounts);
    localStorage.setItem('activityCounts', JSON.stringify(resetCounts));
  };

  return (
    <div>
      <h2>Daily Activity Tracker</h2>
      <div>
        <h3>Videos Skipped: {activityCounts.skippedCount}</h3>
        <button onClick={handleSkipVideo}>Skip Video</button>
      </div>
      <div>
        <h3>Study Hours: {activityCounts.studyHours}</h3>
        <button onClick={handleStudySession}>Log Study Hour</button>
      </div>
      <div>
        <h3>Exercise Sessions: {activityCounts.exerciseCount}</h3>
        <button onClick={handleExerciseSession}>Log Exercise</button>
      </div>
      <div>
        <h3>Screen Time Reduction: {activityCounts.screenTimeReduction}</h3>
        <button onClick={handleScreenTimeReduction}>Log Reduction</button>
      </div>
      <button onClick={resetCounts} style={{ marginTop: '20px' }}>Reset All Counts</button>
      <p style={{ marginTop: '20px' }}>Stay focused and keep track of your achievements!</p>
    </div>
  );
};

export default WellBeing;
