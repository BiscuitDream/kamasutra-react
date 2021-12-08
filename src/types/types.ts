export type PostType = {
    id: number;
    message: string;
    likesCount: number;
};

export type PhotosType = {
    small: string | null,
    large: string | null
};

export type UserProfileType = {
    aboutMe: string;
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotosType;
};

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: PhotosType
    status: string | null;
    followed: boolean;
};
