"use client";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  DefaultEdgeOptions,
  NodeTypes,
  BackgroundVariant,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import { div, label } from "three/examples/jsm/nodes/Nodes.js";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    position: { x: 0, y: 0 },

    data: {
      label: (
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="text-green-600 w-4 h-4"
          >
            <path
              fill="#fb7185"
              d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6"
            />
          </svg>
        </div>
      ),
    },
  },
  {
    id: "2",
    type: "default",
    position: { x: 100, y: 100 },
    style: { backgroundColor: "#8b5cf6", color: "white" },
    data: { label: <div className="font-bold">storm</div> },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: (
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 384 512"
          >
            <path
              fill="#74C0FC"
              d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"
            />
          </svg>
        </div>
      ),
    },
    position: { x: 200, y: 200 },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", label: "build", type: "smoothstep" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const nodeColor = (node: Node) => {
  switch (node.type) {
    case "input":
      return "#34d399";
    case "output":
      return "#f472b6";
    default:
      return "#3b82f6";
  }
};

const FlowPage = () => {
  const [variant, setVariant] = useState<BackgroundVariant>(
    BackgroundVariant.Dots
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const defaultEdgeOptions = { animated: true };

  return (
    <div className="container mx-auto">
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
        >
          <Controls />
          <MiniMap nodeColor={nodeColor} pannable zoomable />
          <Panel position={"top-left"} className="space-x-3">
            <div className="font-bold ml-3">图案背景:</div>
            <Button onClick={() => setVariant(BackgroundVariant.Dots)}>
              dots
            </Button>
            <Button onClick={() => setVariant(BackgroundVariant.Lines)}>
              lines
            </Button>
            <Button onClick={() => setVariant(BackgroundVariant.Cross)}>
              cross
            </Button>
          </Panel>
          <Background variant={variant} gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowPage;
