// Questionaries.js
import React from 'react';
import { Row, Col } from 'reactstrap';
import ActiveQuestionnaires from './ActiveQuestionaries';
import ComponentCard from '../ComponentCard';

const Questionaries = () => {
 
 return (
    <div className="App">
        <Row>
<Col md="12">
      <ComponentCard title="Questionaries">
    
      <ActiveQuestionnaires />
      </ComponentCard>
      </Col>
      </Row>
      
    </div>
  );
};

export default Questionaries;
