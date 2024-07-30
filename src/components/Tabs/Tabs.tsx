import React, {FC, PropsWithChildren, ReactNode} from 'react';
import {Tabs} from 'antd';

const {TabPane} = Tabs;



const TabLabel: FC<PropsWithChildren<{ children: React.ReactNode }>> = ({ children }) => children;
const TabContent: FC<PropsWithChildren<{ children: React.ReactNode }>> = ({ children }) => children;

type TabLabel = React.ReactElement<typeof TabLabel>;
type TabContent = React.ReactElement<typeof TabContent>;

const CustomTabs: FC<PropsWithChildren<Array<TabLabel | TabContent>>> = ({ children }) => {
    const tabChildren = React.Children.toArray(children) as Array<TabLabel | TabContent>;

    return (
        <Tabs>
            {tabChildren.map((child, index) => {
                const label = tabChildren.find(child => child.type === TabLabel) as TabLabel;
                const content = tabChildren.find(child => child.type === TabContent) as TabContent;

                return (
                    <TabPane tab={label.props.children} key={index}>
                        {content.props.children}
                    </TabPane>
                );
            })}
        </Tabs>
        // JSON.stringify(tabChildren)
    );
};

const App = () => (
    <CustomTabs>
        <TabLabel>Tab 1</TabLabel>
        <TabContent>Tab 1 content</TabContent>
        <TabLabel>Tab 2</TabLabel>
        <TabContent>Tab 2 content</TabContent>
        <TabLabel>Tab 3</TabLabel>
        <TabContent>Tab 3 content</TabContent>
    </CustomTabs>
);

export default App;
