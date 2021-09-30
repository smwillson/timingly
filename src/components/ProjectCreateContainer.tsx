import { Button, Form } from 'semantic-ui-react';

const ProjectCreateContainer = () => {
  return (
    <div>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-proj-name"
            label="Project Name"
            placeholder="Project Name"
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-proj-desc"
            label="Project Description"
            placeholder="Project Description"
          />
          <Form.Input>
            <Button fluid type="submit">
              Create New Project
            </Button>
          </Form.Input>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProjectCreateContainer;
