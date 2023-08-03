import { Container, Row, Col} from 'react-bootstrap';


const AddContentCreator = () => {

    // handleSubmit
    // handleChange
    // useEffect
    // useState to handle the forms

    return(
        <Container>
            <Row>
                <Col>
                    <h2>
                        Add A Creator
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <form>
                        Name:
                        <br/>
                        Description:
                        <br/>
                        Social Media Links 
                        <br/>

                        Submit
                    </form>
                </Col>
            </Row>
        </Container>
    )

}

export default AddContentCreator
