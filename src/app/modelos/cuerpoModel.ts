export module CuerpoModel {

    export interface CuerpoResponse {
        id: number;
        accountId : number;
        type: number;
        title: string;
        message: string;
        creationDate: string;
        status: boolean;
        imageName: any;
        likeCount: number;
        readCount: number;
        responseCount: number;
        fileId: any,
        dtActivityId: any,
        projectId: any,
        repairWpId: any,
        notifyByUserId: number;
        wpId: number;
        tagsIds: any;
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

}