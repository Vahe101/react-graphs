import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import "./index.scss";

const BarChart = ({ data }) => {
    const colors = [
        "#B21F00",
        "#C9DE00",
        "#2FDE00",
        "#00A6B4",
        "#6800B4",
        "#6AA0B4",
        "#680BB4",
        "#6FFFF4",
    ];
    const [backgroundColor, setBacgroundColor] = useState(colors);
    const state = ({
        labels: ["Russia", "Canada", "USA", "China", "Brazil", "Australia", "India", "Others"],
        datasets: [
            {
                label: "Rainfall",
                backgroundColor: backgroundColor,
                hoverBackgroundColor: [
                    "#501800",
                    "#4B5000",
                    "#175000",
                    "#003350",
                    "#35014F",
                    "#CCA0B4",
                    "#000BB4",
                    "#000000",
                ],
                data: data,
            }
        ]
    });

    const options = ({
        title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
        },
        legend: {
            display: true,
            position: "right",
        },
        responsive: true,
    });

    const click = (event) => {
        if (event.length > 0) {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            const index = event[0]._index;
            colors.splice(index, 1, randomColor);
            setBacgroundColor(colors);
        }
    }

    return (
        <div className="parent">
            <Bar
                type="bar"
                data={state}
                options={options}
                onElementsClick={click}
            />
        </div>
    );
}

export default BarChart;
