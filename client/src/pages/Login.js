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
        <Form style={{marginTop: "50px"}}> 
            <FormGroup row style={{display: "flex"}}>
                <Col sm={6} style={{margin: "auto auto"}}>
                    <Label for="signupEmail" sm={2}>Email</Label>
                    <Input type="text" name="email" id="email"/>
                    <Label for="signupPassword" sm={2}>Password</Label>
                    <Input type="text" name="password" id="password"/>
                    <Button sm={2} style={{width: "90px", marginTop: "30px"}}>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    )
}

export default Login;