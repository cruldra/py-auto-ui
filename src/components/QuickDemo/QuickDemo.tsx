import {useState, useEffect, FC, PropsWithChildren, ReactNode} from "react";
import {ConfigProvider, theme} from "antd";
import {Typography} from 'antd';
import {TabContent, TabLabel, Tabs} from "../Tabs";

const {Title} = Typography;
export  type QuickDemoProps = {
    firstHeading?: string;
    secondHeading?: string;
    children: ReactNode
} & PropsWithChildren<ReactNode>
export const QuickDemo: FC<QuickDemoProps> = ({
                                                  firstHeading,
                                                  secondHeading,
                                                  children
                                              }) => {
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
            <div className={"w-100% h-100%   flex flex-col items-center  "}>
                {
                    firstHeading ? <h1> {firstHeading} </h1> : null
                }
                {
                    secondHeading ? <h2 className={"mt-1"}> {secondHeading} </h2> : null
                }
                <div className={"w-100%  "}>
                    <Tabs children={children} />
                </div>
            </div>
        </ConfigProvider>
    );
};
