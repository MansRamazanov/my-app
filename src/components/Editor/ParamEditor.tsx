import React, { useState } from 'react';

interface Param {
  id: number;
  name: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
  onChange: (model: Model) => void;
}

const ParamEditor: React.FC<Props> = ({ params, model, onChange }) => {
  const [paramValues, setParamValues] = useState(model.paramValues);

  const handleValueChange = (paramId: number, newValue: string) => {
    const updatedParamValues = paramValues.map((paramValue) => {
      if (paramValue.paramId === paramId) {
        return { ...paramValue, value: newValue };
      }
      return paramValue;
    });
    setParamValues(updatedParamValues);
    onChange({ ...model, paramValues: updatedParamValues });
  };

  return (
    <div>
      {params.map((param) => (
        <div key={param.id}>
          <label htmlFor={`param-${param.id}`}>{param.name}:</label>
          <input
            id={`param-${param.id}`}
            type="text"
            value={paramValues.find((pv) => pv.paramId === param.id)?.value || ''}
            onChange={(event) => handleValueChange(param.id, event.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ParamEditor;
