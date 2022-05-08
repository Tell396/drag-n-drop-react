import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Import an engine for Drag&Drop
import Container from './engine/Container'

const App = () => {
    return (
        <div className="flex justify-center align-center mt-10">
            {/* Create a Drag&Drop zone: */}
            <DndProvider backend={HTML5Backend}>
                <div className="flex">
                    <Container />
                </div>

                <hr />

                <div className="flex">
                    <Container />
                </div>
            </DndProvider>
        </div>
    );
};

export default App
