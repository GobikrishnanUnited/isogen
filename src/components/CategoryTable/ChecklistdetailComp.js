import React from 'react';
import { Row, Col, Form, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import ComponentCard from '../ComponentCard';

export default function ChecklistdetailComp({ checklist }) {
  ChecklistdetailComp.propTypes = {
    checklist: PropTypes.object,
  };

  return (
    <Form>
      <FormGroup>
        <ComponentCard title="Checklist Details">
          <Row>
            <Col>
              {/* Check if questions exist in the checklist prop */}
              {checklist && checklist.questions && checklist.questions.length > 0 ? (
                checklist.questions.map((question) => (
                  <div key={`${question.checklist_id}-${question.question_title}`} style={{ marginBottom: '10px' }}>
                    <strong>Q:</strong> {question.question_title}
                  </div>
                ))
              ) : (
                <p>No questions available for this checklist.</p>
              )}
            </Col>
          </Row>
        </ComponentCard>
      </FormGroup>
    </Form>
  );
}
