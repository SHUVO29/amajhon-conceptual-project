
// import feature from './Feature';
// import { ReactPropTypes } from 'prop-types';
import propTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'> <AiFillCheckCircle className='text-green-500 mr-2'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: propTypes.string 
}

export default Feature;