import React from 'react';
import { HealthCheckEntry } from '../types';

const style = { margin: 10 };

const HealthCheck: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  let color: 'green' | 'yellow' | 'orange' | 'red';

  switch (entry.healthCheckRating) {
    case 0:
      color = 'green';
      break;
    case 1:
      color = 'yellow';
      break;
    case 2:
      color = 'orange';
      break;
    case 3:
      color = 'red';
      break;
    default:
      color = 'green';
      break;
  }

  return (
    <div>
      <section style={style}>
        <p>
          {entry.date} 
        </p>
        <p>description={entry.description} color--{color}</p> 
        
      </section>
    </div>
  );
};

export default HealthCheck;