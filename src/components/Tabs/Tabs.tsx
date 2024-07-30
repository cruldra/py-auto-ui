import React, {FC, PropsWithChildren} from 'react';
import {Tabs} from 'antd';

const {TabPane} = Tabs;



const TabLabel : FC<PropsWithChildren>= ({children}) => children;
const TabContent: FC<PropsWithChildren> = ({children}) => children;


const CustomTabs: FC<PropsWithChildren  > = ({children}) => {
    const tabChildren = React.Children.toArray(children);

    return (
        <Tabs>
            {tabChildren.map((child, index) => {
                const label = child.props.children.find(child => child.type === 'tab-label');
                const content = child.props.children.find(child => child.type === 'tab-content');

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
        <TabLabel>Tab 2</TabLabel>
        <TabLabel>Tab 3</TabLabel>
        <TabContent>Tab 1 content</TabContent>
        <TabContent>Tab 2 content</TabContent>
        <TabContent>Tab 3 content</TabContent>
    </CustomTabs>
);

export default App;
