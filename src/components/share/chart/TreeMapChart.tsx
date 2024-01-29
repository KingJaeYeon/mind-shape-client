"use client";
import React from "react";
import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapSquarify } from "@visx/hierarchy";
import shakespeare, {
  Shakespeare,
} from "@visx/mock-data/lib/mocks/shakespeare";
import { scaleLinear } from "@visx/scale";
import { tempData } from "@/components/share/chart/pieTypes";

export const color1 = "#f3e9d2";
const color2 = "#4281a4";
export const background = "#fff";

const colorScale = scaleLinear<string>({
  domain: [0, Math.max(...tempData.slice(0, 30)?.map((d) => d.size ?? 0))],
  range: [color2, color1],
});

const data = stratify<Shakespeare>()
  .id((d) => d.id)
  .parentId((d) => d.parent)(tempData)
  .sum((d) => d.size ?? 0);

const defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 };

export type TreemapProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default function TreeMapChart({
  width,
  height,
  margin = defaultMargin,
}: TreemapProps) {
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0));

  return width < 10 ? null : (
    <div>
      <label>tile method</label>{" "}
      <div>
        <svg width={width} height={height}>
          <rect width={width} height={height} rx={14} fill={background} />
          <Treemap<typeof data>
            top={margin.top}
            root={root}
            size={[xMax, yMax]}
            tile={treemapSquarify}
            round
          >
            {(treemap) => (
              <Group>
                {treemap
                  .descendants()
                  .reverse()
                  .map((node, i) => {
                    const nodeWidth = node.x1 - node.x0;
                    const nodeHeight = node.y1 - node.y0;
                    return (
                      <Group
                        key={`node-${i}`}
                        top={node.y0 + margin.top}
                        left={node.x0 + margin.left}
                      >
                        {node.depth === 1 && (
                          <rect
                            width={nodeWidth}
                            height={nodeHeight}
                            stroke={background}
                            strokeWidth={4}
                            fill="transparent"
                          />
                        )}
                        {node.depth > 2 && (
                          <rect
                            width={nodeWidth}
                            height={nodeHeight}
                            stroke={background}
                            fill={colorScale(node.value || 0)}
                          />
                        )}
                      </Group>
                    );
                  })}
              </Group>
            )}
          </Treemap>
        </svg>
      </div>
    </div>
  );
}
