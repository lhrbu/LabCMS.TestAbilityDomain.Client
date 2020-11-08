import React, { Fragment, useEffect, useState } from 'react';
import { Collapse, Tree, Spin } from 'antd';
import TestFieldsWebAPI from '../WebAPIs/TestFieldsWebAPI';
import { v4 } from 'uuid';
import TestField from '../Models/TestField';
import './HeaderBar.css';

const { Panel } = Collapse;
const _testFieldsWebAPI = new TestFieldsWebAPI();


export default function TestFields()
{
    const [testFields, setTestFields] = useState<TestField[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() =>
    {
        LoadFromWebAPIAsync();
    }, [])

    return (
        <Fragment>
            <div className="HeaderBar">HJL-NL-TI-V Test Fields Tree View:</div>

            <Spin spinning={!loaded} style={{ marginTop: '32px' }}>
                <Collapse>
                    {testFields.map(item => GeneratePanel(item))}
                </Collapse>
            </Spin>
        </Fragment>);

    async function LoadFromWebAPIAsync()
    {
        const loadedTestFields = await _testFieldsWebAPI.GetAsync();
        setTestFields([...loadedTestFields]);
        setLoaded(true);
    }

    function GeneratePanel(testField: TestField)
    {
        return (
            <Panel header={testField.Name} key={v4()}>
                <Tree showLine={{ showLeafIcon: false }}
                    treeData={testField.TestAbilities} />
            </Panel>
        );
    }
}