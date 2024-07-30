import React, {Children, FC, isValidElement, ReactNode} from 'react';
import {Tabs as AntTabs} from 'antd';

const {TabPane} = AntTabs;

export const Tabs: FC<{ children: ReactNode }> = ({children}) => {
    const labels = Children.toArray(children).filter(child => isValidElement(child) && child.type === TabLabel);
    const contents = Children.toArray(children).filter(child => isValidElement(child) && child.type === TabContent);

    return (
        <AntTabs type={"card"}>
            {labels.map((label, index) => (
                <TabPane tab={label} key={index}>
                    {contents[index]}
                </TabPane>
            ))}
        </AntTabs>
    );
};

export const TabLabel: FC<{ children: ReactNode }> = ({children}) => <>{children}</>;
export const TabContent: FC<{ children: ReactNode }> = ({children}) => <>{children}</>;

