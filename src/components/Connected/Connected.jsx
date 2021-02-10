import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getUsersRequest } from "../../store/chartsData/actions/index";
import Button from "../../shared/Button/index";
import BarChart from "../BarChart";
import SimpleBar from "../PieChart";

import "./index.scss";

const Connected = ({ getUsersRequest, users }) => {
    const [check, setCheck] = useState(true);

    useEffect(() => {
        getUsersRequest();
    }, []);

    return (
        <div className="container">
            <div>
                <Button value="PieChart" onClick={() => { setCheck(true) }} />
                <Button value="SimpleBarChart" onClick={() => { setCheck(false) }} />
            </div>
            {users.items &&
                (<>
                    {check && (<div><BarChart data={users.items} /></div>)}
                    {!check && (<div><SimpleBar data={users.items} /></div>)}
                </>)
            }
        </div>
    );
}

export default connect(
    ({ users }) => ({ users }),
    {
        getUsersRequest
    }
  )(Connected);
