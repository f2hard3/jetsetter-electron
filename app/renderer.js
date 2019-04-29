import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// const Application = () => {
//     return (
//         <div>
//             <h1>Hello World!</h1>
//             <button className="full-width">
//                 This button does not do anything.
//             </button>
//         </div>
//     )
// }

const renderApplication = () => {
    const { default: Application } = require('./components/Application');
    render(
        <AppContainer>
            <Application />
        </AppContainer>,
        document.getElementById('application')
    );
};

// const renderApplication = () => {
//     import('./components/Application').then(({ default: Application }) => {
//         render(
//             <AppContainer>
//                 <Application />
//             </AppContainer>,
//             document.getElementById('application')
//         );
//     });
// };

// const renderApplication = async () => {
//     const { default: Application } = await import('./components/Application');
//         render(
//             <AppContainer>
//                 <Application />
//             </AppContainer>,
//             document.getElementById('application')
//         );

// };

renderApplication();

if (module.hot) module.hot.accept(renderApplication);
