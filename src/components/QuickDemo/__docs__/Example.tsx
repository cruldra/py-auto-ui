import {FC} from "react";
import 'uno.css'
import {QuickDemo} from "../QuickDemo";
import {TabContent, TabLabel} from "../../Tabs";

const Example: FC = ({}) => {
    return (
        <>

            <QuickDemo firstHeading={"我是你爹"}>
                <TabLabel>11</TabLabel>
                <TabContent><h1>111</h1></TabContent>
                <TabLabel>333</TabLabel>
                <TabContent>44</TabContent>
            </QuickDemo>
        </>
    );
};

export default Example;
