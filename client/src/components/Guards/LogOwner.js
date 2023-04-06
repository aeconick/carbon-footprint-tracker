import { useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

import { LogContext } from "../../contexts/LogContext";
import { AuthContext } from "../../contexts/AuthContext";

export const LogOwner = () => {
    const { logId } = useParams;
    const { getLog } = useContext(LogContext);
    const { userId } = useContext(AuthContext);

    const currentLog = getLog(logId);

    if (currentLog && currentLog._ownerId !== userId) {
        return <Navigate to={`/catalog/${logId}`} />
    }

    return <Outlet />;
};

//TODO: delete if your not using it