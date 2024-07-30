import {useState} from "react";
import {ConfigProvider, theme, Button, Card} from "antd";

const QuickDemo = () => {
    const {defaultAlgorithm, darkAlgorithm} = theme;
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ConfigProvider>
            <Card style={{width: "max-content"}}>
                <Button>
                    Change Theme to {isDarkMode ? "Light" : "Dark"}
                </Button>
            </Card>
        </ConfigProvider>
    );
};

export default QuickDemo;
