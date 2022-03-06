import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionContext } from './AccordionWrapper';
import "./Accordian.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faExternalLink } from '@fortawesome/free-solid-svg-icons';
const AccordionItem = (props) => {

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    return (
        <div className="accordion-item">
            <h3 className="accordion-title">
                <button
                    onClick={(e) => eventHandler(e, props.index)}
                    className={active === props.index ? 'active' : 'inactive'}
                    aria-expanded={active === props.index ? 'true' : 'false'}
                    aria-controls={'sect-' + indexCount(props.index)}
                    aria-disabled={active === props.index ? 'true' : 'false'}
                >
                    <span className="title-wrapper">{props.item.title}
                    </span>
                    <span className="icon-wrapper" onClick={(e) => eventHandler(e, props.index)}>
                        <FontAwesomeIcon icon={active === props.index ? faAngleUp : faAngleDown} />
                    </span>
                </button>
            </h3>
            <div className="accordion-panel">
                <div id={'sect-' + indexCount(props.index)} className={active === props.index ? 'panel-open' : 'panel-close'}>
                    {props.item.description}
                    {props.item.link ? <div className='mt-2'><a className='text-danger' href={props.item.link} target='_blank' rel='noreferrer'>Open <FontAwesomeIcon icon={faExternalLink} /></a></div> : null}
                    {props.item.images.length > 0 ? <div className='mt-2 d-flex flex-wrap justify-content-center'>
                        {
                            props.item.images.map((img, i) => <div className='m-2' key={i}><img src={img} width={250} alt="" /></div>)
                        }
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

AccordionItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default AccordionItem; 