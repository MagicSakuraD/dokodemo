import React, { ChangeEvent, memo } from "react";
import { Handle, Position } from "reactflow";

interface ColorSelectorNodeProps {
  data: {
    color: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  isConnectable: boolean;
}

const ColorSelectorNode: React.FC<ColorSelectorNodeProps> = memo(
  ({ data, isConnectable }) => {
    return (
      <>
        <Handle
          type="target"
          position={Position.Left}
          style={{ background: "#e2e8f0" }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <div>
          Custom Color Picker Node: <strong>{data.color}</strong>
        </div>
        <input
          className="nodrag"
          type="color"
          onChange={data.onChange}
          defaultValue={data.color}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          style={{ top: 10, background: "#555" }}
          isConnectable={isConnectable}
        />
      </>
    );
  }
);

export default ColorSelectorNode;
