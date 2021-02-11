import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "../../store/chartsData/actions";
import Button from "../../shared/Button";
import BarChart from "../BarChart";
import PieChart from "../PieChart";

const Connected = ({ getUsersRequest, users }) => {
    const [contentVerification, setContentVerification] = useState(0);

    useEffect(() => {
        getUsersRequest();
    }, []);

    return (
        <div className="container">
            <div>
                <Button value="SimpleBarChart" onClick={() => setContentVerification(0)} />
                <Button value="PieChart" onClick={() => setContentVerification(1)} />
            </div>
            {users.items &&
                (<>
                    {contentVerification === 0 && (<BarChart data={users.items} />)}
                    {contentVerification === 1 && (<PieChart data={users.items} />)}
                </>)
            }
        </div>
    );
}

const mapStateToProps = () => ({ users }) => ({ users });

const mapDispatchToProps = { getUsersRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Connected);
