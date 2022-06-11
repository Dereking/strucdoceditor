import { Guid } from "guid-typescript";

export default {
    uuid : function():string {
        return Guid.create().toString();
    }
}