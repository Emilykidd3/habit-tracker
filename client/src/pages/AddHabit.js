import React from 'react';
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

const AddHabit = () => {
    return(
        <Form>
            <FormGroup row>
                <Label for="newHabit" sm={2}>Habit Name</Label>
                <Col sm={6}>
                    <Input type="text" name="habit" id="habitName"/>
                </Col>
            </FormGroup>
        </Form>
    )
}

export default AddHabit;