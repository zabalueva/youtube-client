import { Snippet } from "./snippet.model";

export interface Item {
    "kind": string,
    "etag": string,
    "id": string,
    "snippet": Snippet,
    "statistics": {
        "viewCount": string,
        "likeCount": string,
        "dislikeCount": string,
        "favoriteCount": string,
        "commentCount": string
    }
}
