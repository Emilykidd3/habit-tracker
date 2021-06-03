import React from 'react';
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Row,
    Container
} from 'reactstrap';

const Login = () => {
    return(
        <Container style={{marginTop:"80px"}}>
            <Col>
                <Row style={{display:"flex"}}>
                    <div>
                        <h2 style={{textAlign: "center"}}>Login</h2>
                    </div>
                </Row>
                <Row>
                    <Form style={{marginTop: "30px"}}> 
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
                </Row>
            </Col>
        </Container>
    )
}

export default Login;