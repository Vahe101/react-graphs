import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import generateRandomColor from "../../shared/colorsGenerate";

const BarChart = ({ data }) => {
    const colors = generateRandomColor();
    const [backgroundColor, setBackgroundColor] = useState(colors);
    const state = ({
        labels: ["Russia", "Canada", "USA", "China", "Brazil", "Australia", "India", "Others"],
        datasets: [{
            label: "Rainfall",
            backgroundColor: backgroundColor,
            hoverBackgroundColor: [
                "#50j600",
                "#4B7800",
                "#175928",
                "#003943",
                "#350258",
                "#CCA078",
                "#000B12",
                "#000878",
            ],
            data: data,
        }]
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

    const onClickEvent = (event) => {
        if (event.length > 0) {
            const randomColor = (generateRandomColor(1))[0];
            const index = event[0]._index;
            colors.splice(index, 1, randomColor);
            setBackgroundColor(colors);
        }
    }

    return (
        <div>
            <Bar
                type="bar"
                data={state}
                options={options}
                onElementsClick={onClickEvent}
            />
        </div>
    );
}

export default BarChart;
