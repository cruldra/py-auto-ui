import {FC} from "react";
import QuickDemo from "../QuickDemo";
import 'uno.css'
const Example: FC = ({}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <QuickDemo/>
        </div>
    );
};

export default Example;
