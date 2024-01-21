'use client'
import {LegendItem, LegendLabel, LegendOrdinal} from "@visx/legend";
import {getTransformedData, ordinalColorScale} from "@/components/share/chart/pieTypes";
import {usePortfolioStore} from "@/store/portfolioStore";

export default function ChartLegend() {
    const {getValue, setValue,priceAndSymbol} = usePortfolioStore()
    const selected = getValue("portfolioSelected");
    const totalPrice = getValue('totalPrice')

    const transformedData = getTransformedData(priceAndSymbol)
    const legendGlyphSize = 12;
    return <LegendOrdinal
        scale={ordinalColorScale}
        labelFormat={(label) => `${label.toUpperCase()}`}
    >
        {(labels) => (
            <div className={"flex w-[200px] flex-col justify-center pl-[10px]"}>
                {labels.map((label, i) => (
                    <LegendItem
                        key={`legend-quantile-${i}`}
                        margin="1px 0px"
                        onClick={() => {
                            setValue('portfolioSelected',
                                selected && selected === label.text
                                    ? null
                                    : label.text,
                            );
                        }}
                    >
                        <div
                            className={
                                "flex flex-1 rounded-full px-[5px] py-[2px] text-[14px] text-[#0D1421] hover:bg-gray-200"
                            }
                        >
                            <div className={"flex flex-1 items-center"}>
                                <svg width={legendGlyphSize} height={legendGlyphSize}>
                                    <circle
                                        fill={label.value}
                                        r={legendGlyphSize / 2}
                                        cx={legendGlyphSize / 2}
                                        cy={legendGlyphSize / 2}
                                    />
                                </svg>
                                <LegendLabel align="left" margin="0 0 0 4px">
                                    {labels[i].text}
                                </LegendLabel>
                            </div>
                            <div>
                                <p>
                                    {((transformedData[labels[i].text] / totalPrice) * 100)
                                        .toFixed(2)
                                        .toLocaleString() + "%"}
                                </p>
                            </div>
                        </div>
                    </LegendItem>
                ))}
            </div>
        )}
    </LegendOrdinal>
}