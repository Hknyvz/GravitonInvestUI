import { Button, Popover } from 'antd'
import React from 'react'
import { AiOutlineBarChart } from 'react-icons/ai'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export interface IChartData {
    date: string,
    value: number,
}

function TableChart({ data }: { data: IChartData[] }) {
    return (
        <Popover
            content={
                <div style={{ width: 1000, height: 300 }}>
                    <ResponsiveContainer className="chart">
                        <LineChart
                            width={500}
                            height={250}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Legend />
                            <Tooltip labelStyle={{ color: "#000" }} />
                            <Line type="monotone" dataKey="value" name='TL' stroke="#14aa00" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            }
            onOpenChange={() => console.log('open change')}
        >
            <Button icon={<AiOutlineBarChart size={20} />} />
        </Popover>
    )
}

export default TableChart