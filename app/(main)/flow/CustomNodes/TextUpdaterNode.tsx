import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const handleStyle = { left: 10 };

interface TextUpdaterNodeProps {
  data: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  isConnectable: boolean;
}

const TextUpdaterNode: React.FC<TextUpdaterNodeProps> = ({
  data,
  isConnectable,
}) => {
  return (
    <div className="border flex justify-center rounded-lg shadow-lg shadow-indigo-500/50 bg-indigo-500">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="grid m-3 max-w-sm items-center gap-1.5">
        <Label htmlFor="text">text</Label>
        <Input id="text" type="text" />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default TextUpdaterNode;
