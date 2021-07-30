import { Item } from "./item.model";
import { PageInfo } from "./pageInfo.model";

export interface Page {
    "kind": string,
    "etag": string,
    "pageInfo": PageInfo,
    "items": Item[]
}
