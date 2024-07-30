import {useState, useEffect} from "react";
import {ConfigProvider, theme, Button, Card} from "antd";

const QuickDemo = () => {
    const {defaultAlgorithm, darkAlgorithm} = theme;
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <ConfigProvider theme={isDarkMode ? {algorithm: darkAlgorithm} : {algorithm: defaultAlgorithm}}>
            <Card style={{width: "max-content"}}>
                <Button>
                    Change Theme to {isDarkMode ? "Light" : "Dark"}
                </Button>
            </Card>
        </ConfigProvider>
    );
};

export default QuickDemo;
