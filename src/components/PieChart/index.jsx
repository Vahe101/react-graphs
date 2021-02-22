import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import generateRandomColor from "../../shared/colorsGenerate";

const PieChart = ({ data }) => {
    const colors = generateRandomColor();
    const [backgroundColor, setBackgroundColor] = useState(colors);
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
            backgroundColor: backgroundColor,
            hoverBackgroundColor: [
                "#50j600",
                "#4B7800",
                "#8nn788",
                "#003943",
                "#350258",
                "#CCA078",
                "#000B12",
                "#000878",
            ],
            data: data,
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
        responsive: true,
    });

    const onDiagramClick = (elements) => {
        if (elements.length > 0) {
            const randomColor = (generateRandomColor(1))[0];
            const index = elements[0]._index;
            colors.splice(index, 1, randomColor);
            setBackgroundColor(colors);
        }
    }

    return (
        <div>
            <Pie
                type="pie"
                data={state}
                options={options}
                onElementsClick={onDiagramClick}
            />
        </div>
    )
};

export default PieChart;
