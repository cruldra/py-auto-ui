import React, {FC, PropsWithChildren, ReactNode, Children, isValidElement, cloneElement} from 'react';
import {Tabs} from 'antd';

const {TabPane} = Tabs;

const TabRoot: FC<{ children: ReactNode }> = ({ children }) => {
    const labels = Children.toArray(children).filter(child => isValidElement(child) && child.type === TabLabel);
    const contents = Children.toArray(children).filter(child => isValidElement(child) && child.type === TabContent);

    return (
        <Tabs>
            {labels.map((label, index) => (
                <TabPane tab={label} key={index}>
                    {contents[index]}
                </TabPane>
            ))}
        </Tabs>
    );
};

const TabLabel: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;
const TabContent: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

