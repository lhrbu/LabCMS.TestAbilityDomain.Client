import { DataNode } from 'antd/lib/tree';
import Axios from 'axios'
import TestField from '../Models/TestField';

export default class TestFieldsWebAPI
{
    private _url="/api/TestFields";
    public async GetAsync()
    {
        return (await Axios.get(this._url,{params:{date:new Date()}})).data as TestField[];
    }

    public async PostAsync()
    {
        await Axios.post(this._url,{params:{date:new Date()}});
    }
}