"use client";
import React from "react";
import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapBinary } from "@visx/hierarchy";
import shakespeare, {
  Shakespeare,
} from "@visx/mock-data/lib/mocks/shakespeare";
import { scaleLinear } from "@visx/scale";
import { tempData } from "@/components/share/chart/pieTypes";
import { Text } from "@visx/text";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

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
  type?: string;
  formattedData?: any;
};

export default function TreeMapChart({
  width,
  height,
  type,
  margin = defaultMargin,
  formattedData,
}: TreemapProps) {
  const xMax = type === "mobile" ? width : width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0));

  const mobileMargin = type === "mobile" ? 0 : 10;
  const { t } = useTranslation("category");
  return width < 10 ? null : (
    <div>
      <svg width={width} height={height}>
        <rect width={width} height={height} rx={14} fill={background} />
        <Treemap<typeof data>
          top={margin.top}
          paddingTop={8}
          root={root}
          size={[xMax, yMax]}
          tile={treemapBinary}
          round
        >
          {(treemap) => (
            <>
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
                        left={node.x0 + mobileMargin}
                      >
                        {node.depth === 1 && (
                          <>
                            <rect width={nodeWidth} height={16} fill={"gray"} />
                            <rect
                              width={nodeWidth}
                              height={nodeHeight}
                              stroke={"white"}
                              strokeWidth={4}
                              fill="transparent"
                            />
                            <text
                              dy=".33em"
                              fontSize={9}
                              y={9}
                              x={nodeWidth / 2}
                              fontFamily="Arial"
                              textAnchor="middle"
                              fontWeight={700}
                              style={{ pointerEvents: "none" }}
                              fill={"black"}
                            >
                              {t(node.data.id ?? "")}
                            </text>
                          </>
                        )}
                        {node.depth > 2 && (
                          <>
                            <rect
                              width={nodeWidth}
                              height={nodeHeight}
                              stroke={background}
                              fill={colorScale(node.value || 0)}
                            />
                          </>
                        )}
                      </Group>
                    );
                  })}
              </Group>

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
                        top={node.y0 + margin.top + nodeHeight / 2}
                        left={node.x0 + mobileMargin + nodeWidth / 2}
                      >
                        {node.depth > 2 && (
                          <text
                            dy=".33em"
                            fontSize={type === "mobile" ? 8 : 9}
                            fontFamily="Arial"
                            textAnchor="middle"
                            fontWeight={500}
                            style={{ pointerEvents: "none" }}
                            fill={"black"}
                          >
                            {node.data.id}
                          </text>
                        )}
                      </Group>
                    );
                  })}
              </Group>
            </>
          )}
        </Treemap>
      </svg>
    </div>
  );
}
