import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const TOAST_TIMEOUT = 3000;

const Toast = ({ children, show, hideToast }) => {
    const [node] = useState(document.createElement('div'));

    const removeNode = () => {
        if (document.querySelector('#toast').children.length) {
            document.querySelector('#toast').childNodes[0].remove();
        }
    };

    useEffect(() => {
        if (show) {
            document
                .querySelector('#toast')
                .appendChild(node)
                .classList.add('toast');

            setTimeout(() => {
                removeNode();
                hideToast();
            }, TOAST_TIMEOUT);
        } else {
            removeNode();
        }

        return () => removeNode();
    }, [node, hideToast, show, children]);

    return ReactDOM.createPortal(children, node);
};

export default Toast;