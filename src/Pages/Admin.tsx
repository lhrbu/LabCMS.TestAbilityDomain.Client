import React, { Fragment, useEffect, useState } from 'react';
import { Button } from 'antd';
import TestFieldsWebAPI from '../WebAPIs/TestFieldsWebAPI';
import './HeaderBar.css';
import LoginCheckService from '../Services/LoginCheckService';
import { ReloadOutlined } from '@ant-design/icons';

const _testFieldsWebAPI = new TestFieldsWebAPI();
export default function Admin()
{
    const [loginFlag,setLoginFlag] = useState<boolean>(false);

    useEffect(()=>{
        setLoginFlag(LoginCheckService.Instance().LoginFlag);
    });
    const [postLoading,setPostLoading]= useState<boolean>(false);
    return loginFlag?(
    <Fragment>
        <div className="HeaderBar">HJL-NL-TI-V Test Fields Admin:</div>
        <Button type="primary" size="large" style={{marginTop:"24px"}} icon={<ReloadOutlined />}
            loading={postLoading} disabled={postLoading}
            onClick={ReloadTestFieldsAsync}
            >Reload Test Fields</Button>
    </Fragment>):
    <div>Not Authorized to view this page!</div>;

    async function ReloadTestFieldsAsync()
    {
        try{
            setPostLoading(true);
            await _testFieldsWebAPI.PostAsync();
            window.alert("Test Fields Reloaded!");
        }finally{
            setPostLoading(false);
        }
    }
}
