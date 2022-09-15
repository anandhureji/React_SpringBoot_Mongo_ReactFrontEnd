import httpCommon from "../http-common";

const getAll=()=>{
    return httpCommon.get("/employees");
}

const create = data =>{
    return httpCommon.post("/employees",data);

}

const get = id => {
    return httpCommon.get(`/employees/${id}`);
}

const update = data =>{
    return httpCommon.put('/employees',data);
}

const remove = id =>{
    return httpCommon.delete(`/employees/${id}`);
}

export default {getAll,create,get,update,remove};

