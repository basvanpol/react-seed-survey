import 'regenerator-runtime';
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({adapter: new EnzymeAdapter()});

jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}));