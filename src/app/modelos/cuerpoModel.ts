export module CuerpoModel {

    export interface CuerpoResponse {
        id: number;
        accountId : number;
        type: number;
        title: string;
        message: string;
        creationDate: string;
        status: boolean;
        imageName: null;
        likeCount: number;
        readCount: number;
        responseCount: number;
        fileId: null,
        dtActivityId: null,
        projectId: null,
        repairWpId: null,
        notifyByUserId: number;
        wpId: number;
        tagsIds: null;
        userInfo: UserInfo[];        
    }

    export interface UserInfo{
        id: number;
        name: string;
        color: string;
        foreColor: string;
        avatarExtension: string;
        coverExtension: string;
    }

    export interface Imagen{
        name: string;       
    }

}