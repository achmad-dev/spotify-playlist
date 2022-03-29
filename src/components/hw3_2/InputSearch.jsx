import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const InputSearch = ({onSubmit, onChange}) => (
    <Form onSubmit={onSubmit} className="mb-4">
        <InputGroup >
            <FormControl
                placeholder="Start typing artist's name..."
                aria-label="Start typing artist's name..."
                onChange={e => onChange(e.target.value)}
                />
            <Button variant="outline-success" type="submit" aria-label="Search button">
                Search
            </Button>
        </InputGroup>
    </Form>
)

export default InputSearch;
