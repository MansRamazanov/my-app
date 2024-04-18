import React from 'react';
import ParamEditor from '../Editor/ParamEditor';

const App: React.FC = () => {
  const params = [
    { id: 1, name: 'Назначение' },
    { id: 2, name: 'Длина' },
  ];

  const model = {
    paramValues: [
      { paramId: 1, value: 'повседневное' },
      { paramId: 2, value: 'макси' },
    ],
  };

  const handleModelChange = (updatedModel: typeof model) => {
    console.log('Updated model:', updatedModel);
  };

  return (
    <div>
      <ParamEditor params={params} model={model} onChange={handleModelChange} />
    </div>
  );
};

export default App;
