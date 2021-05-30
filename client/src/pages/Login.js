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

const Login = () => {
    return(
        <Form style={{margin: "50px 0 0 150px"}}> 
            <FormGroup row>
                <Label for="newHabit" sm={2}>Email</Label>
                <Col sm={6}>
                    <Input type="text" name="habit" id="habitName"/>
                </Col>
                <Button sm={2} style={{width: "90px", marginLeft: "50px"}}>Submit</Button>
            </FormGroup>
        </Form>
    )
}

export default Login;