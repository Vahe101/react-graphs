import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "../../store/chartsData/actions/index";
import Button from "../../shared/Button/index";
import BarChart from "../BarChart";
import SimpleBar from "../PieChart";

const Connected = ({ getUsersRequest, users }) => {
    const [check, setCheck] = useState(0);
    useEffect(() => {
        getUsersRequest();
    }, []);

    return (
        <div className="container">
            <div>
                <Button value="PieChart" onClick={() => { setCheck(0) }} />
                <Button value="SimpleBarChart" onClick={() => { setCheck(1) }} />
            </div>
            {users.items &&
                (<>
                    {check === 0 && (<div><BarChart data={users.items} /></div>)}
                    {check === 1 && (<div><SimpleBar data={users.items} /></div>)}
                </>)
            }
        </div>
    );
}

// export default connect(
//     ({ users }) => ({ users }),
//     {
//         getUsersRequest
//     }
// )(Connected);
const mapStateToProps = () => ({ users }) => ({ users });
const mapDispatchToProps = { getUsersRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Connected);
