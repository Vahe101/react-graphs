import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

import "./charts.scss";

const PieChart = ({ data }) => {
    const colors = [
        "#B21F00",
        "#C9DE00",
        "#2FDE00",
        "#B54F00",
        "#Bh7F00",
        "#B25800",
        "#B2c800",
        "#B2h800",
    ]
    const [backgroundColor, setBacgroundColor] = useState(colors);
    const state = ({
        labels: [
            "First",
            "Second",
            "Third",
            "Fourth",
            "Fifth",
            "Sixth",
            "Seventh",
            "Eighth",
        ],
        datasets: [{
            data: data,
            backgroundColor:backgroundColor,
            hoverBackgroundColor: [
                "#501800",
                "#4B5000",
                "#175000",
                "#e3e3e3",
                "#e3e3d4",
                "#e3e3t4",
                "#e3e3g6",
                "#e3e376",
            ],
        }],
    });

    const options = ({
        title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20
        },
        legend: {
            display: true,
            position: "right"
        },
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
        <div>
            <Pie
                type="pie"
                data={state}
                options={options}
                onElementsClick={click}
            />
        </div>
    )
};

export default PieChart;
