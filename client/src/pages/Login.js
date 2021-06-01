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
                <Label for="signupEmail" sm={2}>Email</Label>
                <Col sm={6}>
                    <Input type="text" name="email" id="email"/>
                </Col>
                <Label for="signupPassword" sm={2}>Password</Label>
                <Col sm={6}>
                    <Input type="text" name="password" id="password"/>
                </Col>
                <Button sm={2} style={{width: "90px", marginLeft: "50px"}}>Submit</Button>
            </FormGroup>
        </Form>
    )
}

export default Login;